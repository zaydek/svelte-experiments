<script>
	import Link from "./router/Link.svelte"
	import Redirect from "./router/Redirect.svelte"
	import RedirectRoute from "./router/RedirectRoute.svelte"
	import Route from "./router/Route.svelte"
	import Router from "./router/Router.svelte"
</script>

<nav>
	<Link path="/">Open page /</Link><br />
	<Link path="/a">Open page /a</Link><br />
	<Link path="/b">Open page /b</Link><br />
	<Link path="/oops">Open page /oops</Link><br />
</nav>

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
	<RedirectRoute from="/oops" to="/a" />
</Router>
