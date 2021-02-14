<script>
	import { pathStore, STATE } from "./LazyRouter.svelte"

	export let path
</script>

{#if $pathStore.path === path && $pathStore.status === STATE.OK}
	<slot />
{/if}
