import { parse_parts, parse_params } from "./parts/parts.js"
import { writable } from "svelte/store"

const routes = {}

export function register_path(path) {
	routes[path] = parse_parts(path)
}

export function registered_path_exists(path) {
	return routes[path] !== undefined
}

export const store = writable({
	path: "__init__",
	parts: parse_parts(typeof window === "undefined" ? "/" : window.location.pathname),
	params: {},
})

// Handler for window.location.pathname changes.
export function handler(pathname) {
	let path = pathname
	if (path.endsWith(".html")) {
		path = path.slice(0, -5)
	}
	let next_path = "/404" // Assume "/404" as the fallback path
	let next_params = {}
	for (const each of Object.keys(routes)) {
		const cmp = parse_parts(path)
		const p = parse_params(routes[each], cmp, { strict: false })
		if (p !== null) {
			next_path = each
			next_params = p
			break
		}
	}
	store.update(current => ({
		...current,
		path: next_path,
		params: next_params,
	}))
}

// Auxiliary function for window.history.pushState.
export function push_state(path, scrollTo = [0, 0]) {
	// Dedupe paths:
	if (path === get(store)) {
		// No-op
		return
	}
	handler(path)
	if (registered_path_exists(path)) window.history.pushState({}, "", trim_html(path))
	window.scrollTo(scrollTo[0], scrollTo[1])
}

// Auxiliary function for window.history.replaceState.
export function replace_state(path, scrollTo = [0, 0]) {
	// Dedupe paths:
	if (path === get(store)) {
		// No-op
		return
	}
	handler(path)
	if (registered_path_exists(path)) window.history.replaceState({}, "", trim_html(path))
	window.scrollTo(scrollTo[0], scrollTo[1])
}
