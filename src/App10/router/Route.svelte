<!-- prettier-ignore -->
<script>
	import { register_route, router_store } from "./Router.svelte"

	export let component = undefined // Use zero values to surpress warnings
	export let path = ""             // Use zero values to surpress warnings

	register_route(path)
</script>

<!-- A: <Route component={...} /> -->
<!-- B: <Route>{...}</Route> -->
{#if $router_store.path === path}
	{#if component}
		<svelte:component this={component} />
	{:else}
		<slot />
	{/if}
{/if}
