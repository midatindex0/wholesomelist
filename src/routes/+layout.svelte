<script>
	import '../app.css';
	import analytics from '$lib/analytics.js';
</script>

<svelte:head>
	<title>Wholesomelist - DreamH</title>
	<meta content="DreamH Team" property="og:author" />
	<meta content="Wholesome Hentai God List (DreamH UI)" property="og:title" />
	<meta
		content="'The god list is the best source for verified wholesome hentai: here, we find, tag, and tier the most wholesome of hentai so you don't have to.' - wholesomelist.com"
		property="og:description"
	/>
	<meta content="https://wholesomelist.vercel.app/" property="og:url" />
	<meta content="https://wholesomelist.vercel.app/dreamh.png" property="og:image" />
</svelte:head>

<section>
	<slot />
</section>
