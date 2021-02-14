<script context="module">
	import { parse_parts } from "./parts/parts.js"
	import { readable } from "svelte/store"

	const routes = {}

	export function register_route(path) {
		routes[path] = parse_parts(path)
	}

	export const router_store = readable({
		route: "__init__",
		parts: parse_parts(typeof window === "undefined" ? "/" : window.location.pathname),
	})

	// // const parts = getCurrentPathInfo()
	// if (typeof window !== "undefined") {
	// 	const src_parts = parse_parts("/[hello]/[world]")
	// 	const cmp_parts = parse_parts(window.location.pathname)
	// 	const params = parse_params(src_parts, cmp_parts, { strict: false })
	// 	setContext(SVETLANA_ROUTER_KEY, params)
	// }
</script>

<script>
	import { onMount } from "svelte"
	import { parse_params } from "./parts/parts.js"

	onMount(() => {
		let ctx_params = null
		for (const each of Object.keys(routes)) {
			const cmp_parts = parse_parts(window.location.pathname)
			const params = parse_params(routes[each], cmp_parts, { strict: false })
			if (params !== null) {
				ctx_params = params
				break
			}
		}
		console.log({ ctx_params })

		// const handler = () => {
		// 	// $router_store = {
		// 	// 	route: "__init__",
		// 	// 	parts: parse_parts(typeof window === "undefined" ? "/" : window.location.pathname),
		// 	// }
		// }
		// window.addEventListener("popstate", handler)
		// return () => window.removeEventListener("popstate", handler)
	})
</script>

<slot />
