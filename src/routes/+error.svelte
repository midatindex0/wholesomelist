<script>
	import { page } from '$app/stores';
</script>

<div class="h-screen flex justify-center items-center flex-col">
    <div class="text-8xl">{$page.status}</div>
    <div class="text-xl text-subtext0">{$page.error.message}</div>
</div>