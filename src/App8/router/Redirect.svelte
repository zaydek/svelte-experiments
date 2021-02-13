<script>
	import { pushState, replaceState } from "./Router.svelte"

	export let path
	export let scrollTo = [0, 0]

	replaceState(path, scrollTo)
</script>
