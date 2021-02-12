<script>
	import data from "./imdb.js"

	let search = ""
	let searchTimeoutID = 0
	let score = 0
	let scoreTimeoutID = ""

	function debounce(callback, tid) {
		if (tid) clearTimeout(tid)
		tid = setTimeout(callback, 50)
	}

	function handleInputSearch(e) {
		debounce(() => {
			search = e.target.value
		}, searchTimeoutID)
	}

	function handleInputScore(e) {
		debounce(() => {
			score = e.target.value
		}, scoreTimeoutID)
	}

	$: filtered = (() => {
		let filtered = data
		if (search) {
			filtered = filtered.filter(each => each.name.toLowerCase().includes(search.toLowerCase()))
		}
		if (score) {
			filtered = filtered.filter(each => +each.score >= score)
		}
		return filtered
	})()
</script>

{#await import("./Thing.svelte").then(m => m.default) then component}
	<svelte:component this={component} />
{/await}

<!-- DEBUG -->
<pre>
	{JSON.stringify({ search, searchTimeoutID, score, scoreTimeoutID }, null, 2)}
</pre>

Name:
<input type="text" value={search} on:input={handleInputSearch} />
<br />

Score:
<input type="number" min="0" max="10" value={score} on:input={handleInputScore} />
<br />

{#each filtered as each (each.rank)}
	<div style="border: 1px solid red">
		<p>
			{#if search && each.name.toLowerCase().includes(search.toLowerCase())}
				{@html (() => {
					const name_lower = each.name.toLowerCase()
					const search_lower = search.toLowerCase()

					let html = ""
					for (let x = 0; x < name_lower.length; x++) {
						if (name_lower.slice(x, x + search_lower.length) === search_lower) {
							html += `<strong>${each.name.slice(x, x + search_lower.length)}</strong>`
							x += search_lower.length - 1
							continue
						}
						html += each.name[x]
					}
					return html
				})()}
			{:else}
				{each.name}
			{/if}
			({each.year})
		</p>
		<p>Rank: {each.rank}</p>
		<p>Score: {each.score}</p>
	</div>
{/each}
