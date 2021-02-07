import { writable } from "svelte/store"

export const store_path = writable(window.location.pathname)
