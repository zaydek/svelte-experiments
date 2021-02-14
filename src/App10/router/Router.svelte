<!--

This implementation is loosely based on these articles:

- https://codechips.me/svelte-routing-with-page-js-part-1
- https://codechips.me/svelte-routing-with-page-js-part-2

-->
<script context="module">
	import trim_html from "./utils/trim_html.js"
	import { get } from "svelte/store"
	import { parse_parts } from "./utils/parts.js"
	import { setContext } from "svelte"
	import { writable } from "svelte/store"

	// const registeredPaths = {
	// 	// [path]: props,
	// }
	//
	// // Registers a path to prevent recursive redirects.
	// export function registerPath(path) {
	// 	// TODO: Should parse parse path props here and assign them as
	// 	// registeredPaths[path] = props || null.
	// 	registeredPaths[path] = null
	// }
	//
	// export function registerPathExists(path) {
	// 	return registeredPaths[path] !== undefined
	// }
	//
	// // Auxiliary function for window.history.pushState.
	// export function pushState(path, scrollTo = [0, 0]) {
	// 	// Dedupe paths:
	// 	if (path === get(pathStore)) {
	// 		// No-op
	// 		return
	// 	}
	// 	pathStore.set(path)
	// 	if (registerPathExists(path)) window.history.pushState({}, "", trim_html(path))
	// 	window.scrollTo(scrollTo[0], scrollTo[1])
	// }
	//
	// // Auxiliary function for window.history.replaceState.
	// export function replaceState(path, scrollTo = [0, 0]) {
	// 	// Dedupe paths:
	// 	if (path === get(pathStore)) {
	// 		// No-op
	// 		return
	// 	}
	// 	pathStore.set(path)
	// 	if (registerPathExists(path)) window.history.replaceState({}, "", trim_html(path))
	// 	window.scrollTo(scrollTo[0], scrollTo[1])
	// }

	// Gets the current path metadata such as the path, parts, etc.
	function getCurrentPathInfo() {
		const path = trim_html(typeof window === "undefined" ? "/" : window.location.pathname)
		const parts = parse_parts(path)
		return { path, parts }
	}

	export const pathInfo = writable(getCurrentPathInfo())
</script>

<script>
	import { onMount } from "svelte"

	onMount(() => {
		const handler = () => {
			pathInfo.set(getCurrentPathInfo())
		}
		window.addEventListener("popstate", handler)
		return () => window.removeEventListener("popstate", handler)
	})
</script>

<slot />
