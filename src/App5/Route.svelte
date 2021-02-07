<script>
	import { store_path } from "./stores/path.js"

	export let path = ""
</script>

{#if $store_path === path}
	<slot />
{/if}
