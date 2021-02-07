<script>
	import redirectImpl from "./redirectImpl.js"

	export let path = ""

	$: locallyScoped = !path.includes("://")

	function handleClick(e) {
		e.preventDefault()
		redirectImpl(path)
	}
</script>

<a
	href={path}
	target={locallyScoped ? undefined : "_blank"}
	rel={locallyScoped ? undefined : "noreferrer noopener"}
	on:click={locallyScoped ? handleClick : undefined}
	{...$$props}
>
	<slot />
</a>
