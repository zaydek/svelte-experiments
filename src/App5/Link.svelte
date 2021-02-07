<script>
	// import Redirect from "./Redirect.svelte"
	import { store_path } from "./stores/path"

	export let path = ""
	// let shouldRedirect = false

	$: locallyScoped = !path.includes("://")
	$: externallyScoped = !locallyScoped

	function handleClick(e) {
		e.preventDefault()
		$store_path = path

		// TODO: Move to <Redirect>.
		window.history.pushState({}, "", path) // TODO
		window.scrollTo(0, 0)
	}
</script>

<!-- TODO -->
<!-- {#if shouldRedirect}
	<Redirect {path} />
{/if} -->

<a
	href={path}
	target={externallyScoped ? "_blank" : undefined}
	rel={externallyScoped ? "noreferrer noopener" : undefined}
	on:click={locallyScoped ? handleClick : undefined}
	{...$$props}
>
	<slot />
</a>

<style>
	a {
		color: blue;
		text-decoration: underline;
	}
</style>
