<!-- FIXME: https://github.com/sveltejs/svelte/issues/5969 -->
<script>
	import { pushState } from "./Router.svelte"

	export let path
	export let scrollTo = [0, 0]

	// Describes whether the path is relative or absolute.
	$: scoped = typeof path === "string" && !/^https?:\/\//.test(path)
</script>

<a
	href={path}
	target={scoped ? undefined : "_blank"}
	rel={scoped ? undefined : "noreferrer noopener"}
	on:click={scoped
		? e => {
				e.preventDefault()
				pushState(path, scrollTo)
		  }
		: undefined}
	{...{ ...$$props, path: undefined }}
>
	<slot />
</a>
