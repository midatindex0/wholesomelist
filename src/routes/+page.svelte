<script>
	import list from '$lib/data/list.json';
	import APIList from '$lib/data/APIList.json';
	import Entry from '$lib/components/Entry.svelte';

	import * as scroll from 'svelte-scrollto';
	import MiniSearch from 'minisearch';
	import { onMount } from 'svelte';
	import { page as sveltePage } from '$app/stores';

	let perPage = 10;
	let visible = [];
	let table = list.table;
	let page = $sveltePage.url.searchParams.get('page') ?? 1;
	let changePage = page;
	let miniSearch;
	let query = $sveltePage.url.searchParams.get('q') ?? '';
	let lookup;

	onMount(() => {
		miniSearch = new MiniSearch({
			fields: ['title', 'author', 'note', 'parody', 'siteTags.tags', 'siteTags.characters', 'tags'],
			searchOptions: {
				boost: { title: 2 },
				fuzzy: 0.2
			}
		});
		miniSearch.addAll(list.table);
		lookup = list.table.reduce((result, entry) => {
			result[entry.id] = entry;
			return result;
		}, {});
		search(query);
	});

	function switchPage(cp) {
		if (changePage !== '') {
			if (changePage >= 1 && changePage <= Math.ceil(table.length / perPage)) {
				page = changePage;
			} else {
				changePage = page;
			}
			if (lookup) {
				window.history.pushState('', '', `/?page=${page}&q=${query}`);
			}
		}
	}

	function search(q) {
		if (miniSearch) {
			table = [];
			if (q === '') {
				table = list.table;
			} else {
				for (const match of miniSearch.search(q)) {
					table.push(lookup[match.id]);
				}
				page = 1;
				table = table;
			}
			window.history.pushState('', '', `/?page=${page}&q=${query}`);
		}
	}

	$: search(query);
	$: switchPage(changePage);
	$: visible = table.slice((page - 1) * perPage, page * perPage);
</script>

<div class="my-5" />
<div class="mx-3 md:mx-10 p-1 rounded-lg bg-gradient-to-br from-blue to-red">
	<div class="bg-crust p-5 rounded-lg">
		<div class="text-2xl font-medium">Wholesome Hentai God List v3 (DreamH UI)</div>
		<div>
			We also provide an API with 100% coverage of <a
				class="text-yellow hover:underline"
				href="//wholesomelist.com">wholesomelist</a
			>
			including text/advanced search, more capable random endpoint and filter options. Check the
			<a class="text-green hover:underline" href="/api">API Documentation Page</a>.
		</div>
	</div>
</div>
<div class="my-5" />
<div class="mx-3 md:mx-10 flex relative items-center">
	<button class="px-3 py-2 btn rounded"><i class="fa-solid fa-gear" /></button>
	<div class="mx-2 text-sm text-subtext0 text-center">
		{(page - 1) * perPage + 1}-{page * perPage > table.length
			? table.length
			: page * perPage}
		of {table.length} (out of {list.table.length})
	</div>
	<div class="flex-grow" />
	<input
		bind:value={query}
		class="p-2 rounded bg-surface2 md:w-[300px] md:hover:w-[400px] duration-300"
		type="text"
	/>
	<i class="fa-solid fa-magnifying-glass rounded-r p-3 absolute right-0" />
</div>

<div id="scroll-anchor" />
{#each visible as entry (entry.id)}
	<div class="mx-3 md:mx-10 my-5">
		<Entry {entry} />
	</div>
{/each}
<div class="flex justify-center">
	<button
		on:click={() => {
			if (page > 1) {
				changePage = 1;
				scroll.scrollTo({ element: 'scroll-anchor', offset: 200 });
			}
		}}
		class="btn px-3 py-2 mx-1 rounded"><i class="fa-solid fa-angles-left" /></button
	>
	<button
		on:click={() => {
			if (page > 1) {
				changePage--;
				scroll.scrollTo({ element: 'scroll-anchor', offset: 200 });
			}
		}}
		class="btn px-3 py-2 mx-1 rounded"><i class="fa-solid fa-chevron-left" /></button
	>
	<input bind:value={changePage} class="mx-1 text-center w-10 bg-crust" type="text" />
	<button
		on:click={() => {
			if (page < Math.ceil(table.length / perPage)) {
				changePage++;
				scroll.scrollTo({ element: 'scroll-anchor', offset: 200 });
			}
		}}
		class="btn px-3 py-2 mx-1 rounded"><i class="fa-solid fa-chevron-right" /></button
	>
	<button
		on:click={() => {
			if (page < Math.ceil(table.length / perPage)) {
				changePage = Math.ceil(table.length / perPage);
				scroll.scrollTo({ element: 'scroll-anchor', offset: 200 });
			}
		}}
		class="btn px-3 py-2 mx-1 rounded"><i class="fa-solid fa-angles-right" /></button
	>
</div>
<div class="my-20" />
