import { store_path } from "./stores/path.js"

function noop() {}

export default function redirectImpl(path, { before, after } = { before: noop, after: noop }) {
	before()
	store_path.set(path)
	window.history.pushState({}, "", path)
	window.scrollTo(0, 0)
	after()
}
