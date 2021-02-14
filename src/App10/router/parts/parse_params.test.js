const { parse_params, parse_parts } = require("./parts.js")

function test_(s1, s2) {
	return parse_params(parse_parts(s1), parse_parts(s2))
}

test("integration", () => {
	expect(test_("/", "/")).toEqual({})
	expect(test_("/foo", "/")).toEqual({})
	expect(test_("/", "/foo")).toEqual({})
	expect(test_("/foo", "/foo")).toEqual({})
	expect(test_("/[foo]", "/a")).toEqual({ foo: "a" })
	expect(test_("/[foo]/[bar]", "/a/b")).toEqual({ foo: "a", bar: "b" })
	expect(test_("/[foo]/[bar]/[baz]", "/a/b/c")).toEqual({ foo: "a", bar: "b", baz: "c" })
})
