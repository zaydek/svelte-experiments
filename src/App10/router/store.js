import { parse_parts } from "./parts/parts.js"
import { writable } from "svelte/store"

const routes = {}

export function register_route(path) {
	routes[path] = parse_parts(path)
}

// Auxiliary function for window.history.pushState.
export function pushState(path, scrollTo = [0, 0]) {
	// Dedupe paths:
	if (path === get(store)) {
		// No-op
		return
	}
	store.set(path)
	window.history.pushState({}, "", trim_html(path))
	window.scrollTo(scrollTo[0], scrollTo[1])
}

// Auxiliary function for window.history.replaceState.
export function replaceState(path, scrollTo = [0, 0]) {
	// Dedupe paths:
	if (path === get(store)) {
		// No-op
		return
	}
	store.set(path)
	window.history.replaceState({}, "", trim_html(path))
	window.scrollTo(scrollTo[0], scrollTo[1])
}

export const store = writable({
	path: "__init__",
	parts: parse_parts(typeof window === "undefined" ? "/" : window.location.pathname),
	params: {},
})
