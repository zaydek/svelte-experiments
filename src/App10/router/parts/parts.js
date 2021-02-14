// Matches non-dynamic paths:
//
// - /
// - /hello
// - /hello/
// - /hello/world
// - /hello/world/
//
// Matches dynamic paths:
//
// - /[hello]
// - /[hello]/
// - /[hello]/[world]
// - /[hello]/[world]/
//
// https://regex101.com/r/7uE183/1
const valid_regexp = /^\/(?:(?:\w+|\[\w+\])\/?)*$/

// Parses parts from a path. The path can be a route or a path (use
// { validate_path: true } for routes).
function parse_parts(pathname, { validate_path } = { validate_path: false }) {
	if (validate_path && !valid_regexp.test(pathname)) {
		throw new Error(
			`parse_parts: Cannot parse pathname=${JSON.stringify(pathname)}. ` +
				`Routes must use some combination of non-dynamic syntax such as /hello/world or dynamic syntax such as /[hello]/[world].` +
				`The leading slash is required but the trailing slash is optional.`,
		)
	}

	let path = pathname
	if (path.endsWith(".html")) {
		path = path.slice(0, -5)
	}

	const parts = [
		// {
		//   id: "hello-world",
		//   dynamic: false,
		//   nests: false,
		// },
	]

	// Step over "/":
	let x1 = 1
	while (x1 < path.length) {
		const found = path[x1] === "["
		if (!found) {
			let x2 = x1
			while (x2 < path.length) {
				if (path[x2] === "/") {
					// No-op
					break
				}
				x2++
			}
			const id = path.slice(x1, x2)
			const dynamic = false
			const nests = path.charAt(x2) === "/"
			parts.push({ id, dynamic, nests })
			x1 = x2
		} else {
			let x2 = x1
			while (x2 < path.length) {
				if (path[x2] === "]") {
					// No-op
					break
				}
				x2++
			}
			// Step over "]":
			x2++
			const id = path.slice(x1 + 1, x2 - 1)
			const dynamic = true
			// NOTE: Use path.charAt(x2) because path[x2] cannot be guaranteed.
			const nests = path.charAt(x2) === "/"
			parts.push({ id, dynamic, nests })
			x1 = x2
		}
		// Step over "/":
		x1++
	}
	return parts
}

// Implementation for compare_parts.
function compare_parts_impl(src_parts, cmp_parts, { strict } = { strict: true }) {
	// prettier-ignore
	const ok = (
		(src_parts.id === cmp_parts.id || src_parts.dynamic) &&
		(!strict || src_parts.nests === cmp_parts.nests)
	)
	return ok
}

// Compares a set of parts.
function compare_parts(src_parts, cmp_parts, { strict } = { strict: true }) {
	if (src_parts.length !== cmp_parts.length) {
		return false
	}
	let x = 0
	while (x < src_parts.length) {
		if (!compare_parts_impl(src_parts[x], cmp_parts[x], { strict })) {
			return false
		}
		x++
	}
	return true
}

// Parses params (URL parameters) from a set of parts.
function parse_params(src_parts, cmp_parts, { strict } = { strict: true }) {
	const params = {}
	if (!compare_parts(src_parts, cmp_parts, { strict })) {
		return {}
	}
	let x = 0
	while (x < src_parts.length) {
		if (src_parts[x].dynamic) {
			params[[src_parts[x].id]] = cmp_parts[x].id
		}
		x++
	}
	return params
}

module.exports = { valid_regexp, parse_parts, compare_parts, parse_params }
