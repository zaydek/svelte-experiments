<script>
	import { onMount } from "svelte"
	import { parse_params } from "./parts/parts.js"
	import { store } from "./store.js"

	onMount(() => {
		function handler() {
			$store.params = {} // Reset
			for (const each of Object.keys(routes)) {
				const cmp_parts = parse_parts(window.location.pathname)
				const params = parse_params(routes[each], cmp_parts, { strict: false })
				if (params !== null) {
					$store.params = params
					break
				}
			}
		}
		handler() // Once
		console.log($store.params)
		window.addEventListener("popstate", handler)
		return () => window.removeEventListener("popstate", handler)
	})
</script>

<slot />
