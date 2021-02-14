const parse_path = require("./parse_path.js")

test("integration", () => {
	expect(parse_path("")).toBe("")
	expect(parse_path("index")).toBe("index")
	expect(parse_path("index.html")).toBe("index")
	expect(parse_path("index.html.html")).toBe("index.html")
	expect(parse_path(".html")).toBe("")
})
