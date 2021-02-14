<script context="module">
	import { writable } from "svelte/store"

	export const STATE = {
		LOADING: 0,
		ERROR: 1,
		OK: 2,
	}

	export const pathStore = writable({
		path: typeof window === "undefined" ? "/" : window.location.pathname,
		status: STATE.OK,
	})
</script>

<slot />
