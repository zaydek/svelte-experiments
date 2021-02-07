<script>
	import redirectImpl from "./redirectImpl.js"

	function noop() {}

	export let path = ""
	export let before = noop
	export let after = noop

	redirectImpl(path, { before, after })
</script>
