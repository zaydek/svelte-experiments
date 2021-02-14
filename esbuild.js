const undefined_regexp = / [a-z-]+="undefined"/g

// FIXME: https://github.com/sveltejs/svelte/issues/5969
function noop_undefined(body) {
	return body.replaceAll(undefined_regexp, "")
}

async function generate_page() {
	const fs = require("fs/promises")
	const terser = require("html-minifier-terser")

	await require("esbuild").build({
		bundle: true,
		entryPoints: ["src/App8/index.svelte"],
		format: "cjs", // Use "cjs" not "iife"
		minify: true,
		outfile: "component.out.js",
		plugins: [require("./esbuild-svelte.js")({ generate: "ssr" })],
	})
	const component = require("./component.out.js").default

	const {
		html: body,
		css: { code: css },
		head,
	} = component.render()

	const opts = {
		collapseWhitespace: true,
	}

	let bstr = await fs.readFile("./index.html")
	let data = bstr.toString()

	// prettier-ignore
	data = data.replace("%head%",
		`${!head ? "<!-- head -->" : terser.minify(head, opts)}\n\t\t` +
		`${!css  ? "<!-- css -->"  : css}`
	)

	// prettier-ignore
	data = data.replace("%body%",
		!body ? "<!-- body -->"
			: `<div id="svelte-root">${terser.minify(noop_undefined(body || "<!-- body -->"), opts)}</div>\n\t\t` +
				`<script src="app.js" type="module"></script>`
	)

	await fs.writeFile("build/index.html", data)
}

async function generate_app() {
	await require("esbuild").build({
		bundle: true,
		entryPoints: ["src/app.js"],
		// format: "iife",
		format: "esm",
		minify: true,
		// outfile: "build/app.js",
		outdir: "build",
		plugins: [
			require("./esbuild-svelte.js")({
				generate: "dom",
				hydratable: true,
			}),
		],
		sourcemap: true,
		splitting: true,
	})
}

async function run() {
	const fs = require("fs/promises")

	await fs.mkdir("build", { recursive: true })
	await generate_page()
	await generate_app()
}

run()
