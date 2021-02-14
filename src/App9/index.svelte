<script>
	let path = "/"
	let nextPath = "/"
</script>

<nav>
	<a
		href="/"
		on:click|preventDefault={() => {
			nextPath = "/"
		}}>/</a
	><br />
	<a
		href="/home"
		on:click|preventDefault={() => {
			nextPath = "/home"
		}}>home</a
	><br />
</nav>

{#if path === "/"}
	{#await import("./Root.svelte").then(m => m.default) then component}
		<svelte:component this={component} />
	{/await}
{/if}

{#if path === "/home"}
	{#await import("./Home.svelte").then(m => m.default) then component}
		<svelte:component this={component} />
	{/await}
{/if}

<!--
<h1>Banner</h1>
{#await import("./Lazy.svelte").then(m => m.default) then component}
	<svelte:component this={component} />
{/await} -->
