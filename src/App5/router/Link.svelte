<script>
	import redirectImpl from "./redirectImpl.js"

	export let path = ""
	export let x = 0
	export let y = 0

	$: locallyScoped = !path.includes("://")
</script>

<a
	href={path}
	target={locallyScoped ? undefined : "_blank"}
	rel={locallyScoped ? undefined : "noreferrer noopener"}
	on:click={locallyScoped
		? e => {
				e.preventDefault()
				redirectImpl(path, x, y)
		  }
		: undefined}
	{...$$props}
>
	<slot />
</a>
