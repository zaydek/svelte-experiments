<script>
	import store from "./store"

	let textarea

	function capturePos() {
		if (!$store.pointerIsDown) {
			// No-op
			return
		}
		$store.pos1 = textarea.selectionStart
		$store.pos2 = textarea.selectionEnd
	}

	function handleFocus(e) {
		$store.activeElement = true
		capturePos()
	}
	function handleBlur(e) {
		$store.activeElement = false
		capturePos()
	}
	function handlePointerDown(e) {
		$store.pointerIsDown = true
		capturePos()
	}
	function handlePointerMove(e) {
		capturePos()
	}
	function handlePointerUp(e) {
		$store.pointerIsDown = false
		capturePos()
	}
	function handleInput(e) {
		$store.text = e.target.value
		capturePos()
	}
</script>

<textarea
	bind:this={textarea}
	rows={20}
	cols={80}
	value={$store.text}
	on:focus={handleFocus}
	on:blur={handleBlur}
	on:pointerdown={handlePointerDown}
	on:pointermove={handlePointerMove}
	on:pointerup={handlePointerUp}
	on:input={handleInput}
/>

<pre>
	{JSON.stringify($store, null, 1)}
</pre>
