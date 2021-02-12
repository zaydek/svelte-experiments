<script>
	import store from "./store2.js"

	let element

	/*
	 * contenteditable
	 */
	function handleInput(e) {
		$store.nodes[0].data = "Helladasdasda"
	}

	function updateCursors() {
		const selection = document.getSelection()
		if (selection === null || selection.rangeCount === 0) {
			// No-op
			return
		}
		const range = selection.getRangeAt(0)
		$store.cursors.start.pos = range.startOffset
		$store.cursors.end.pos = range.endOffset
	}

	function handleFocus(e) {
		$store.activeElement = true
	}
	function handleBlur(e) {
		$store.activeElement = false
	}
	function handlePointerDown(e) {
		$store.pointerIsDown = true
		updateCursors() // At end
	}
	function handlePointerMove(e) {
		// Guard:
		if (!$store.pointerIsDown) {
			// No-op
			return
		}
		updateCursors()
	}
	function handlePointerUp(e) {
		updateCursors() // At start
		$store.pointerIsDown = false
	}
	function handleKeyDown(e) {
		// console.log("trigger")
	}
</script>

<!-- prettier-ignore -->
<div
	class="editor-surface"
	on:input={handleInput}
	contenteditable
/>

<div
	bind:this={element}
	class="editor"
	on:focus={handleFocus}
	on:blur={handleBlur}
	on:pointerdown={handlePointerDown}
	on:pointermove={handlePointerMove}
	on:pointerup={handlePointerUp}
	on:keydown={handleKeyDown}
	tabindex="0"
>
	{#each $store.nodes as each (each.id)}
		<div style="position: relative;">
			<div style="position: absolute; top: 0; right: 0; bottom: 0; left: 0; pointer-events: none;">
				<div style="width: {$store.cursors.end.pos}px; height: 100%; background-color: red;" />
			</div>
			<div>Hello</div>
		</div>
	{/each}
</div>

<pre class="debugger">
	{JSON.stringify($store, null, 2)}
</pre>

<!-- prettier-ignore -->
<style>
	:global(body) {
		margin: 0;
	}

	.editor-surface {
		width: 40px;
		height: 40px;
		border: 1px solid black;
	}
	.editor {
		margin: 20px;
		font-size: 20px;
		border: 1px solid black;
	}

	.debugger {
		position: absolute;
		right: 0;
		bottom: 0;
		width: 320px;
		height: 240px;
		background-color: whitesmoke;
	}
</style>
