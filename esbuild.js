// Based on https://esbuild.github.io/plugins/#svelte-plugin.
const sveltePlugin = (options = {}) => ({
	name: "svelte",
	setup(build) {
		const fs = require("fs")
		const path = require("path")
		const svelte = require("svelte/compiler")

		build.onLoad({ filter: /\.svelte$/ }, async args => {
			const convertMessage = ({ message, start, end }) => {
				let location
				if (start && end) {
					const lineText = source.split(/\r\n|\r|\n/g)[start.line - 1]
					const lineEnd = start.line === end.line ? end.column : lineText.length
					location = {
						file: filename,
						line: start.line,
						column: start.column,
						length: lineEnd - start.column,
						lineText,
					}
				}
				return { text: message, location }
			}

			const source = await fs.promises.readFile(args.path, "utf8")
			const filename = path.relative(process.cwd(), args.path)

			try {
				const { js, warnings } = svelte.compile(source, {
					...options,
					filename,
				})
				const contents = js.code + `//# sourceMappingURL=` + js.map.toUrl()
				return { contents, warnings: warnings.map(convertMessage) }
			} catch (e) {
				return { errors: [convertMessage(e)] }
			}
		})
	},
})

async function generatePage() {
	const fs = require("fs/promises")
	const terser = require("html-minifier-terser")

	await require("esbuild").build({
		bundle: true,
		entryPoints: ["src/App3/App.svelte"],
		format: "cjs", // Use "cjs" not "iife"
		minify: true,
		outfile: "component.out.js",
		plugins: [sveltePlugin({ generate: "ssr" })],
	})
	const component = require("./component.out.js").default

	const {
		html: ssrHTML,
		css: { code: ssrCSS },
		head: ssrHead,
	} = component.render()

	const opts = {
		collapseWhitespace: true,
	}

	// prettier-ignore
	const data = `<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Document</title>${!ssrHead ? "" : `
		` + terser.minify(ssrHead, opts)}${!ssrCSS ? "" : `
		<style>${ssrCSS}</style>`}
	</head>
	<body>
		<div id="svelte-root">${terser.minify(ssrHTML, opts)}</div>
		<script src="app.js"></script>
	</body>
</html>
`

	await fs.writeFile("build/index.html", data)
}

async function generateApp() {
	await require("esbuild").build({
		bundle: true,
		entryPoints: ["src/main.js"],
		format: "iife",
		minify: true,
		outfile: "build/app.js",
		plugins: [
			sveltePlugin({
				generate: "dom",
				hydratable: true,
			}),
		],
		sourcemap: true,
	})
}

async function run() {
	await generatePage()
	await generateApp()
}

run()
