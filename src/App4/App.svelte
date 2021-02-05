<script>
	import Icon from "./Icon.svelte"

	const items = [
		{ path: "/film", name: "film", text: "Film" },
		{ path: "/tv", name: "video-camera", text: "TV" },
		{ path: "/login", name: "login", text: "Login" },
		{ path: "/sign-up", name: "user-add", text: "Sign Up" },
	]
</script>

<div class="sticky top-0">
	<!-- Nav -->
	<div class="flex-row px-24 h-64 bg-red-500 shadow shadow-sm">
		<a href="/" class="flex-row align-center m-gap-8 hover:bg-white hover:bg-opacity-10 transition">
			<div class="flex-row justify-center w-64">
				<Icon class="w-24 h-24 color-white" name="home-fill" />
			</div>
		</a>
		{#each items as each, x (each.name)}
			{#if x == 2}
				<div class="grow" />
			{/if}
			<a href={each.path} class="flex-row align-center m-gap-8 px-12 hover:bg-white hover:bg-opacity-10 transition">
				<Icon class="w-20 h-20 color-white color-opacity-90" name={each.name} />
				<div class="weight-500 color-white color-opacity-90">{each.text}</div>
			</a>
		{/each}
	</div>
	<!-- Search -->
	<div class="absolute all pointer-events-none">
		<div class="flex-row justify-center align-center h-full">
			<!-- prettier-ignore -->
			<div class="flex-row justify-center align-center m-gap-8 w-384 h-32 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-12 transition pointer-events-auto">
				<Icon class="w-20 h-20 color-white color-opacity-90" name="search" />
				<div class="weight-500 color-white color-opacity-90">Search</div>
			</div>
		</div>
	</div>
</div>
