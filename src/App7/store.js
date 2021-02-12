import { writable } from "svelte/store"

export default writable({
	// Describes whether the element is the active element.
	activeElement: false,

	// Describes whether the pointer is down; activeElement must be true.
	pointerIsDown: false,

	text: "Hello, world!",
	pos1: 0,
	pos2: 0,
})
