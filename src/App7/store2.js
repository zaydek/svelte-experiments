import { writable } from "svelte/store"

const PARAGRAPH = "paragraph"

function newID() {
	return Math.random().toString(36).slice(2, 6)
}

const store = writable({
	// Describes whether the element is the active element.
	activeElement: false,

	// Describes whether the pointer is down; activeElement must be true.
	pointerIsDown: false,

	// Describes the document using structured nodes.
	nodes: [
		{
			id: newID(),
			type: PARAGRAPH,
			data: "Hello, world!",
		},
	],

	// Describes the document cursors.
	cursors: {
		start: {
			pos: 0,
			// ...
		},
		end: {
			pos: 0,
			// ...
		},
	},
})

export default store
