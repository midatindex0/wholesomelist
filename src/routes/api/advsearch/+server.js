import { json } from '@sveltejs/kit';
import list from '$lib/data/list.json';
import APIList from '$lib/data/APIList.json';

const lookup = list.table.reduce((result, entry) => {
    result[entry.id] = entry;
    return result;
}, {});

/** @type {import('./$types').RequestHandler} */
export function GET({ url }) {
    let entries = APIList.table;
    const author = url.searchParams.get('author') ? url.searchParams.get('author').split(',').map(x => x.trim().toLowerCase()) : null;
    const tier = url.searchParams.get('tier') ? url.searchParams.get('tier').split(',').map(x => x.trim().toLowerCase()) : null;
    const pageGreaterThan = Number(url.searchParams.get('pg') ?? '0');
    const pageLessThan = Number(url.searchParams.get('pl') ?? '10000');
    const parody = url.searchParams.get('parody') ? url.searchParams.get('parody').split(',').map(x => x.trim().toLowerCase()) : null;
    const tagOP = url.searchParams.get('tagOP') === 'OR' ? 'OR' : 'AND';
    const excludedTag = url.searchParams.get('et') ? url.searchParams.get('et').split(',').map(x => x.trim().toLowerCase()) : null;
    const tag = url.searchParams.get('tag') ? url.searchParams.get('tag').split(',').map(x => x.trim().toLowerCase()) : null;
    const characterOP = url.searchParams.get('characterOP') === 'OR' ? 'OR' : 'AND';
    const character = url.searchParams.get('character') ? url.searchParams.get('character').split(',').map(x => x.trim().toLowerCase()) : null;
    const siteTag = url.searchParams.get('siteTag') ? url.searchParams.get('siteTag').split(',').map(x => x.trim().toLowerCase()) : null;
    const limit = Number(url.searchParams.get('limit') ?? '-1');
    if (author) {
        entries = entries.filter(function f(x) { return author.includes(x.author) });
    }
    if (tier) {
        entries = entries.filter(function f(x) { return tier.includes(x.tier) });
    }
    entries = entries.filter(function f(x) { return pageGreaterThan < x.pages });
    entries = entries.filter(function f(x) { return pageLessThan > x.pages });
    if (parody) {
        entries = entries.filter(function f(x) { return parody.includes(x.parody) });
    }
    if (excludedTag) {
        entries = entries.filter(function f(x) { return !excludedTag.some(item => x.tags.includes(item)) });
    }
    if (tag) {
        if (tagOP === 'OR') {
            entries = entries.filter(function f(x) { return tag.some(item => x.tags.includes(item)) });
        } else {
            entries = entries.filter(function f(x) { return tag.every(item => x.tags.includes(item)) });
        }
    }
    if (character) {
        if (characterOP === 'OR') {
            entries = entries.filter(function f(x) { return character.some(item => x.siteTags.characters.includes(item)) });
        } else {
            entries = entries.filter(function f(x) { return character.every(item => x.siteTags.characters.includes(item)) });
        }
    }
    if (siteTag) {
        if (tagOP === 'OR') {
            entries = entries.filter(function f(x) { return siteTag.some(item => x.siteTags.tags.includes(item)) });
        } else {
            entries = entries.filter(function f(x) { return siteTag.every(item => x.siteTags.tags.includes(item)) });
        }
    }
    return json({
        author,
        tier,
        pageGreaterThan,
        pageLessThan,
        parody,
        tagOP,
        tag,
        characterOP,
        character,
        siteTag,
        entries: entries.slice(0, limit).map(x => lookup[x.id]),
    })
}