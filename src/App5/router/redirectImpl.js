import store_path from "./store_path.js"

export default function redirectImpl(path, scrollX = 0, scrollY = 0) {
	store_path.set(path)
	window.history.pushState({}, "", path)
	window.scrollTo(scrollX, scrollY)
}
