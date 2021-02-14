<script>
	import { pathStore, STATE } from "./LazyRouter.svelte"

	export let path
</script>

<a
	href={path}
	on:click|preventDefault={() => {
		$pathStore = {
			path,
			status: STATE.LOADING,
		}
	}}
>
	<slot />
</a>
