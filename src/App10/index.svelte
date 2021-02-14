<script>
	import SVETLANA_ROUTER_KEY from "./key.js"

	import Component from "./Component.svelte"
	import { setContext } from "svelte"

	import parse_path from "./router/utils/parse_path.js"
	import { compare_parts, parse_parts } from "./router/utils/parts.js"

	// Gets the current path metadata such as the path, parts, etc.
	function getCurrentPathInfo() {
		const path = parse_path(typeof window === "undefined" ? "/" : window.location.pathname)
		const parts = parse_parts(path)
		return { path, parts }
	}

	// Parses params (parameters) from a set of parts.
	function parse_params(src_parts, cmp_parts, { strict } = { strict: true }) {
		const params = {}
		if (!compare_parts(src_parts, cmp_parts, { strict })) {
			return params
		}
		let x = 0
		while (x < src_parts.length) {
			if (src_parts[x].dynamic) {
				params[[src_parts[x].id]] = cmp_parts[x].id
			}
			x++
		}
		return params
	}

	// const parts = getCurrentPathInfo()
	if (typeof window !== "undefined") {
		const src_parts = parse_parts("/[hello]/[world]")
		const cmp_parts = parse_parts(window.location.pathname)
		const params = parse_params(src_parts, cmp_parts, { strict: false })
		setContext(SVETLANA_ROUTER_KEY, params)
	}
</script>

<Component />
