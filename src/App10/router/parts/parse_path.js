const html_regexp = /\.html?$/

function parse_path(pathname) {
	if (html_regexp.test(pathname)) {
		return pathname.slice(0, -5)
	}
	return pathname
}

module.exports = parse_path
