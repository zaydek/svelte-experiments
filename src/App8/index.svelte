<script>
	import Link from "./router/Link.svelte"
	import Redirect from "./router/Redirect.svelte"
	import Route from "./router/Route.svelte"
	import Router, { pathStore, registerPathExists, replaceState } from "./router/Router.svelte"
	import { onMount } from "svelte"

	onMount(() => {
		// TODO: This is only needed if we are rendering a SPA. If we are rendering
		// SSG / SSR this step should be obviated because the hosting provider
		// should redirect to /404.
		if (!registerPathExists($pathStore)) {
			replaceState("/404")
		}
	})
</script>

<nav>
	<Link path="/">Open page /</Link><br />
	<Link path="/a">Open page /a</Link><br />
	<Link path="/b">Open page /b</Link><br />
	<Link path="/oops">Open page /oops</Link><br />
	<Link path="/40asdasd4">Totally broken link</Link><br />
</nav>

<br />

<Router>
	<Route path="/">
		<div>Hello, world! (/)</div>
	</Route>
	<Route path="/a">
		<div>Hello, world! (/a)</div>
	</Route>
	<Route path="/b">
		<div>Hello, world! (/b)</div>
	</Route>
	<Route path="/c/[helloWorld]">
		<div>Hello, world! (/b)</div>
	</Route>
	<Route path="/oops">
		<Redirect path="/a" />
	</Route>
	<Route path="/404">
		<div>Oops, something went wrong (/404)</div>
	</Route>
</Router>
