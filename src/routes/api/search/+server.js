import { json, error } from '@sveltejs/kit';
import list from '$lib/data/list.json';
import MiniSearch from 'minisearch';

let miniSearch = new MiniSearch({
    fields: ['title', 'author', 'note', 'parody', 'siteTags.tags', 'siteTags.characters', 'tags'],
    searchOptions: {
        boost: { title: 2 },
        fuzzy: 0.2
    }
});
miniSearch.addAll(list.table);

const lookup = list.table.reduce((result, entry) => {
    result[entry.id] = entry;
    return result;
}, {});

/** @type {import('./$types').RequestHandler} */
export function GET({ url }) {
    const limit = Number(url.searchParams.get('limit') ?? '-1');
    const page = Number(url.searchParams.get('page') ?? '1');

    if (!url.searchParams.get('query')) {
        throw error(400, "query param is required")
    }

    const query = url.searchParams.get('query') ?? '';

    let table = [];
    if (query === '') {
        table = [];
    } else {
        for (const match of miniSearch.search(query)) {
            table.push({ entry: lookup[match.id], score: match.score });
        }
    }

    return json({
        limit: limit,
        page: page,
        table: table.slice((page - 1) * limit, page * limit)
    });
}