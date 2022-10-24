import { json } from '@sveltejs/kit';
import list from '$lib/data/updates.json';

/** @type {import('./$types').RequestHandler} */
export function GET({ url }) {
    const limit = Number(url.searchParams.get('limit') ?? '-1');
    const page = Number(url.searchParams.get('page') ?? '1');
    return json({
        limit: limit,
        page: page,
        startID: (page - 1) * limit + 1,
        endID: page * limit,
        table: list.table.slice((page - 1) * limit, page * limit)
    });
}