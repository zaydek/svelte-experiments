<script>
	export let path = ""

	window.history.pushState({}, "", path)
	window.scrollTo(0, 0)
</script>
