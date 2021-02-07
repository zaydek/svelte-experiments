import store_path from "./store_path.js"

export default function redirectImpl(path, x = 0, y = 0) {
	store_path.set(path)
	window.history.pushState({}, "", path)
	window.scrollTo(x, y)
}
