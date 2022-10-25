<script>
	import { onMount } from 'svelte';

	export let entry;

	const id = entry.link.replace(/\/+$/, '').split('/')[
		entry.link.replace(/\/+$/, '').split('/').length - 1
	];
	let type = '';
	if (entry.link.startsWith('https://nhentai.net')) {
		type = 'nh';
	} else if (entry.link.startsWith('https://imgur.com')) {
		type = 'im';
	} else if (entry.link.startsWith('https://hmarket.io')) {
		type = 'hm';
	}
</script>

<div
	class="rounded-lg hover:-translate-y-2 duration-200 bg-mantle"
>
	<div class="p-2 md:p-5 rounded-lg flex">
		<img
			class="rounded-lg w-[100px] md:w-[250px]"
			src={entry.image}
			loading="lazy"
			alt={entry.title}
		/>
		<div class="rounded-lg m-2 md:m-5 p-2 md:p-5 bg-crust flex-grow">
			<a
				href="//wholesomelist.com/list/{entry.uuid}"
				class="text-xl font-medium hover:text-yellow duration-300"
				>{entry.title} <span class="text-subtext0 font-thin">#{entry.id}</span></a
			>
			<div class="text-sm text-subtext0">by <a class="text-teal" href="#">{entry.author}</a></div>
			<div class="flex py-2 text-sm">
				<div class="text-subtext2 bg-base rounded px-2 py-1 h-min mr-2">{entry.pages} pages</div>
				{#if entry.tier === 'S' || entry.tier === 'S-'}
					<div class="px-3 py-1 h-min rounded-lg w-min bg-red text-crust font-medium">
						{entry.tier}
					</div>
				{:else if entry.tier === 'A+' || entry.tier === 'A' || entry.tier === 'A-'}
					<div class="px-3 py-1 h-min rounded-lg w-min bg-yellow text-crust font-medium">
						{entry.tier}
					</div>
				{:else if entry.tier === 'B+' || entry.tier === 'B' || entry.tier === 'B-'}
					<div class="px-3 py-1 h-min rounded-lg w-min bg-green text-crust font-medium">
						{entry.tier}
					</div>
				{:else if entry.tier === 'C+' || entry.tier === 'C' || entry.tier === 'C-'}
					<div class="px-3 py-1 h-min rounded-lg w-min bg-blue text-crust font-medium">
						{entry.tier}
					</div>
				{:else if entry.tier === 'D+' || entry.tier === 'D' || entry.tier === 'D-'}
					<div class="px-3 py-1 h-min rounded-lg w-min bg-mauve text-crust font-medium">
						{entry.tier}
					</div>
				{/if}
				<div class="flex-grow" />
				{#if type === 'nh'}
					<a
						href={`https://cubari.moe/read/nhentai/${id}/1/1`}
						target="_blank"
						rel="noreferrer"
						class="px-3 py-1 btn font-medium rounded-lg">Cubari (NH)</a
					>
				{:else if type === 'im'}
					<a
						href={`https://cubari.moe/read/imgur/${id}/1/1`}
						target="_blank"
						rel="noreferrer"
						class="px-3 py-1 btn font-medium rounded-lg">Cubari (IM)</a
					>
				{:else if type === 'hm'}
					<a
						href={`https://hmarket.io/shop/${id}`}
						target="_blank"
						rel="noreferrer"
						class="px-3 py-1 btn font-medium rounded-lg">HMarket</a
					>
				{/if}
			</div>
			<div class="hidden md:flex">
				{#each entry.tags as tag}
					<div class="px-2 py-1 mr-2 my-2 rounded bg-base">{tag}</div>
				{/each}
			</div>
			<div class="hidden md:block text-subtext0">
				{#if entry.parody === 'None'}
					Original work
				{:else}
					Parody: <a class="text-teal" href="#">{entry.parody}</a>
				{/if}
			</div>
			<div class="text-subtext0">
				{#if entry.note === 'None'}
					<span class="hidden md:block">No notes</span>
				{:else}
					Note: {entry.note}
				{/if}
			</div>
		</div>
	</div>
</div>
