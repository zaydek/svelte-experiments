const { valid_regexp, parse_parts, compare_parts, parse_params } = require("./parts.js")

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

test("compare_parts: strict=false", () => {
	expect(compare_parts(parse_parts("/hello"), parse_parts("/hello"), { strict: false })).toBe(true)
	expect(compare_parts(parse_parts("/hello/"), parse_parts("/hello"), { strict: false })).toBe(true)
	expect(compare_parts(parse_parts("/hello"), parse_parts("/hello/"), { strict: false })).toBe(true)
	expect(compare_parts(parse_parts("/hello/"), parse_parts("/hello/"), { strict: false })).toBe(true)
	expect(compare_parts(parse_parts("/[hello]"), parse_parts("/hello"), { strict: false })).toBe(true)
	expect(compare_parts(parse_parts("/[hello]/"), parse_parts("/hello"), { strict: false })).toBe(true)
	expect(compare_parts(parse_parts("/[hello]"), parse_parts("/hello/"), { strict: false })).toBe(true)
	expect(compare_parts(parse_parts("/[hello]/"), parse_parts("/hello/"), { strict: false })).toBe(true)
	expect(compare_parts(parse_parts("/hello/world"), parse_parts("/hello/world"), { strict: false })).toBe(true)
	expect(compare_parts(parse_parts("/hello/world/"), parse_parts("/hello/world"), { strict: false })).toBe(true)
	expect(compare_parts(parse_parts("/hello/world"), parse_parts("/hello/world/"), { strict: false })).toBe(true)
	expect(compare_parts(parse_parts("/hello/world/"), parse_parts("/hello/world/"), { strict: false })).toBe(true)
	expect(compare_parts(parse_parts("/[hello]/world"), parse_parts("/hello/world"), { strict: false })).toBe(true)
	expect(compare_parts(parse_parts("/[hello]/world/"), parse_parts("/hello/world"), { strict: false })).toBe(true)
	expect(compare_parts(parse_parts("/[hello]/world"), parse_parts("/hello/world/"), { strict: false })).toBe(true)
	expect(compare_parts(parse_parts("/[hello]/world/"), parse_parts("/hello/world/"), { strict: false })).toBe(true)
	expect(compare_parts(parse_parts("/hello/[world]"), parse_parts("/hello/world"), { strict: false })).toBe(true)
	expect(compare_parts(parse_parts("/hello/[world]/"), parse_parts("/hello/world"), { strict: false })).toBe(true)
	expect(compare_parts(parse_parts("/hello/[world]"), parse_parts("/hello/world/"), { strict: false })).toBe(true)
	expect(compare_parts(parse_parts("/hello/[world]/"), parse_parts("/hello/world/"), { strict: false })).toBe(true)
	expect(compare_parts(parse_parts("/[hello]/[world]"), parse_parts("/hello/world"), { strict: false })).toBe(true)
	expect(compare_parts(parse_parts("/[hello]/[world]/"), parse_parts("/hello/world"), { strict: false })).toBe(true)
	expect(compare_parts(parse_parts("/[hello]/[world]"), parse_parts("/hello/world/"), { strict: false })).toBe(true)
	expect(compare_parts(parse_parts("/[hello]/[world]/"), parse_parts("/hello/world/"), { strict: false })).toBe(true)
})

test("compare_parts: strict=true", () => {
	expect(compare_parts(parse_parts("/hello"), parse_parts("/hello"), { strict: true })).toBe(true)
	expect(compare_parts(parse_parts("/hello/"), parse_parts("/hello"), { strict: true })).toBe(false)
	expect(compare_parts(parse_parts("/hello"), parse_parts("/hello/"), { strict: true })).toBe(false)
	expect(compare_parts(parse_parts("/hello/"), parse_parts("/hello/"), { strict: true })).toBe(true)
	expect(compare_parts(parse_parts("/[hello]"), parse_parts("/hello"), { strict: true })).toBe(true)
	expect(compare_parts(parse_parts("/[hello]/"), parse_parts("/hello"), { strict: true })).toBe(false)
	expect(compare_parts(parse_parts("/[hello]"), parse_parts("/hello/"), { strict: true })).toBe(false)
	expect(compare_parts(parse_parts("/[hello]/"), parse_parts("/hello/"), { strict: true })).toBe(true)
	expect(compare_parts(parse_parts("/hello/world"), parse_parts("/hello/world"), { strict: true })).toBe(true)
	expect(compare_parts(parse_parts("/hello/world/"), parse_parts("/hello/world"), { strict: true })).toBe(false)
	expect(compare_parts(parse_parts("/hello/world"), parse_parts("/hello/world/"), { strict: true })).toBe(false)
	expect(compare_parts(parse_parts("/hello/world/"), parse_parts("/hello/world/"), { strict: true })).toBe(true)
	expect(compare_parts(parse_parts("/[hello]/world"), parse_parts("/hello/world"), { strict: true })).toBe(true)
	expect(compare_parts(parse_parts("/[hello]/world/"), parse_parts("/hello/world"), { strict: true })).toBe(false)
	expect(compare_parts(parse_parts("/[hello]/world"), parse_parts("/hello/world/"), { strict: true })).toBe(false)
	expect(compare_parts(parse_parts("/[hello]/world/"), parse_parts("/hello/world/"), { strict: true })).toBe(true)
	expect(compare_parts(parse_parts("/hello/[world]"), parse_parts("/hello/world"), { strict: true })).toBe(true)
	expect(compare_parts(parse_parts("/hello/[world]/"), parse_parts("/hello/world"), { strict: true })).toBe(false)
	expect(compare_parts(parse_parts("/hello/[world]"), parse_parts("/hello/world/"), { strict: true })).toBe(false)
	expect(compare_parts(parse_parts("/hello/[world]/"), parse_parts("/hello/world/"), { strict: true })).toBe(true)
	expect(compare_parts(parse_parts("/[hello]/[world]"), parse_parts("/hello/world"), { strict: true })).toBe(true)
	expect(compare_parts(parse_parts("/[hello]/[world]/"), parse_parts("/hello/world"), { strict: true })).toBe(false)
	expect(compare_parts(parse_parts("/[hello]/[world]"), parse_parts("/hello/world/"), { strict: true })).toBe(false)
	expect(compare_parts(parse_parts("/[hello]/[world]/"), parse_parts("/hello/world/"), { strict: true })).toBe(true)
})

test("parse_params", () => {
	expect(parse_params(parse_parts("/"), parse_parts("/"))).toEqual({})
	expect(parse_params(parse_parts("/foo"), parse_parts("/"))).toEqual({})
	expect(parse_params(parse_parts("/"), parse_parts("/foo"))).toEqual({})
	expect(parse_params(parse_parts("/foo"), parse_parts("/foo"))).toEqual({})
	expect(parse_params(parse_parts("/[foo]"), parse_parts("/a"))).toEqual({ foo: "a" })
	expect(parse_params(parse_parts("/[foo]/[bar]"), parse_parts("/a/b"))).toEqual({ foo: "a", bar: "b" })
	expect(parse_params(parse_parts("/[foo]/[bar]/[baz]"), parse_parts("/a/b/c"))).toEqual({
		foo: "a",
		bar: "b",
		baz: "c",
	})
})
