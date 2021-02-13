<script>
	import { pathStore, registerPath } from "./Router.svelte"

	// E.g. <Route component={...} />
	export let component = undefined

	// E.g. <Route>{...}</Route>
	export let path

	registerPath(path)
</script>

{#if $pathStore === path}
	{#if component}
		<svelte:component this={component} />
	{:else}
		<slot />
	{/if}
{/if}
