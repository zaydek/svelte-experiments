<script>
	let timer = 0

	setInterval(() => {
		timer++
	}, 1e3)
</script>

<br />
<br />
<div>
	<h1 {...$$props}>Running for {timer} seconds</h1>
	<slot />
</div>
