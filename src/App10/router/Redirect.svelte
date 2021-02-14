<script>
	import { replace_state } from "./Router.svelte"

	export let path
	export let scrollTo = [0, 0]

	replace_state(path, scrollTo)
</script>

<!-- <Redirect> is a renderless component. -->
