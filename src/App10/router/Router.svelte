<script>
	import { onMount } from "svelte"
	import { handler, store } from "./store.js"

	onMount(() => {
		function handle_pop_state() {
			handler(window.location.pathname)
		}
		handler(window.location.pathname) // Once
		console.log($store.params)
		window.addEventListener("popstate", handle_pop_state)
		return () => window.removeEventListener("popstate", handle_pop_state)
	})
</script>

<slot />
