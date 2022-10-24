import { error, json } from '@sveltejs/kit';
import list from '$lib/data/list.json';

let lookup = list.table.reduce((result, entry) => {
    const id = entry.link.replace(/\/+$/, '').split('/')[entry.link.replace(/\/+$/, '').split('/').length - 1];
    result[id] = entry;
    return result;
}, {});
lookup.undefined = undefined;
lookup.None = undefined;

/** @type {import('./$types').RequestHandler} */
export function GET({ url }) {
    let code;
    if (url.searchParams.get('code')) {
        code = url.searchParams.get('code');
    } else {
        throw error(400, "NH/Imgur code param missing");
    }
    if (lookup[code]) {
        return json({
            result: true,
            entry: lookup[code],
        })
    } else {
        return json({
            result: false,
        })
    }
}