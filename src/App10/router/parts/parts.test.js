const { valid_regexp, parse_parts, compare_parts } = require("./parts.js")

test("valid_regexp: non-dynamic", () => {
	expect(valid_regexp.test("/")).toBe(true)
	expect(valid_regexp.test("/hello")).toBe(true)
	expect(valid_regexp.test("/hello/")).toBe(true)
	expect(valid_regexp.test("/hello/world")).toBe(true)
	expect(valid_regexp.test("/hello/world/")).toBe(true)
})

test("valid_regexp: dynamic", () => {
	expect(valid_regexp.test("/[hello]")).toBe(true)
	expect(valid_regexp.test("/[hello]/")).toBe(true)
	expect(valid_regexp.test("/[hello]/[world]")).toBe(true)
	expect(valid_regexp.test("/[hello]/[world]/")).toBe(true)
})

test("parts_parts: non-dynamic", () => {
	expect(parse_parts("/hello")).toEqual([{ id: "hello", dynamic: false, nests: false }])
	expect(parse_parts("/hello/")).toEqual([{ id: "hello", dynamic: false, nests: true }])
	expect(parse_parts("/hello/world")).toEqual([
		{ id: "hello", dynamic: false, nests: true },
		{ id: "world", dynamic: false, nests: false },
	])
	expect(parse_parts("/hello/world/")).toEqual([
		{ id: "hello", dynamic: false, nests: true },
		{ id: "world", dynamic: false, nests: true },
	])
})

test("parts_parts: dynamic", () => {
	expect(parse_parts("/[hello]")).toEqual([{ id: "hello", dynamic: true, nests: false }])
	expect(parse_parts("/[hello]/")).toEqual([{ id: "hello", dynamic: true, nests: true }])
	expect(parse_parts("/[hello]/[world]")).toEqual([
		{ id: "hello", dynamic: true, nests: true },
		{ id: "world", dynamic: true, nests: false },
	])
	expect(parse_parts("/[hello]/[world]/")).toEqual([
		{ id: "hello", dynamic: true, nests: true },
		{ id: "world", dynamic: true, nests: true },
	])
})

test("compare_parts: integration", () => {
	expect(compare_parts(parse_parts("/hello"), parse_parts("/hello"))).toBe(true)
	expect(compare_parts(parse_parts("/hello"), parse_parts("/hello/"))).toBe(false)
	expect(compare_parts(parse_parts("/hello/"), parse_parts("/hello"))).toBe(false)
	expect(compare_parts(parse_parts("/hello/"), parse_parts("/hello/"))).toBe(true)
	expect(compare_parts(parse_parts("/hello/world"), parse_parts("/hello/world"))).toBe(true)
	expect(compare_parts(parse_parts("/hello/world"), parse_parts("/hello/world/"))).toBe(false)
	expect(compare_parts(parse_parts("/hello/world/"), parse_parts("/hello/world"))).toBe(false)
	expect(compare_parts(parse_parts("/hello/world/"), parse_parts("/hello/world/"))).toBe(true)
	expect(compare_parts(parse_parts("/hello"), parse_parts("/[hello]"))).toBe(true)
	expect(compare_parts(parse_parts("/hello/"), parse_parts("/[hello]"))).toBe(false)
	expect(compare_parts(parse_parts("/hello"), parse_parts("/[hello]/"))).toBe(false)
	expect(compare_parts(parse_parts("/hello/"), parse_parts("/[hello]/"))).toBe(true)
	expect(compare_parts(parse_parts("/hello/world"), parse_parts("/hello/[world]"))).toBe(true)
	expect(compare_parts(parse_parts("/hello/world/"), parse_parts("/hello/[world]"))).toBe(false)
	expect(compare_parts(parse_parts("/hello/world"), parse_parts("/hello/[world]/"))).toBe(false)
	expect(compare_parts(parse_parts("/hello/world/"), parse_parts("/hello/[world]/"))).toBe(true)
	expect(compare_parts(parse_parts("/hello/world"), parse_parts("/[hello]/[world]"))).toBe(true)
	expect(compare_parts(parse_parts("/hello/world/"), parse_parts("/[hello]/[world]"))).toBe(false)
	expect(compare_parts(parse_parts("/hello/world"), parse_parts("/[hello]/[world]/"))).toBe(false)
	expect(compare_parts(parse_parts("/hello/world/"), parse_parts("/[hello]/[world]/"))).toBe(true)
	expect(compare_parts(parse_parts("/hello/world"), parse_parts("/[hello]/world"))).toBe(true)
	expect(compare_parts(parse_parts("/hello/world"), parse_parts("/[hello]/[world]"))).toBe(true)
	expect(compare_parts(parse_parts("/hello/world"), parse_parts("/hello/[world]"))).toBe(true)
	expect(compare_parts(parse_parts("/hello/world"), parse_parts("/[hello]/[world]"))).toBe(true)
})
