<script context="module">
	// getServerProps resolves props on the server.
	export async function getServerProps() {
		return new Promise(resolve => {
			setTimeout(() => {
				resolve("Hello, world!")
			}, 1e3)
		})
	}
</script>

<script>
	export let serverProps
</script>

{serverProps}
