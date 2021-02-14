<!-- prettier-ignore -->
<script>
	import { register_path, store } from "./store.js"

	export let component = undefined // Use zero values to surpress warnings
	export let path = ""             // Use zero values to surpress warnings

	register_path(path)
</script>

<!-- A: <Route component={...} /> -->
<!-- B: <Route>{...}</Route> -->
{#if $store.path === path}
	{#if component}
		<svelte:component this={component} />
	{:else}
		<slot />
	{/if}
{/if}
