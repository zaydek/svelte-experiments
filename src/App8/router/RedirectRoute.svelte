<script>
	import Redirect from "./Redirect.svelte"
	import { pathStore } from "./Router.svelte"

	export let from
	export let to
</script>

{#if $pathStore === from}
	<Redirect path={to} />
{/if}
