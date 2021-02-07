import { writable } from "svelte/store"

function resolvePath() {
	if (window.location.pathname === "/") {
		return "*"
	}
	return window.location.pathname
}

export const store_path = writable(resolvePath())
