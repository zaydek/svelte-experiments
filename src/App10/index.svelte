<script>
	import Link from "./router/Link.svelte"
	import Router from "./router/Router.svelte"
	import Route from "./router/Route.svelte"
	import { store } from "./router/store.js"
</script>

<nav>
	<Link path="/">Open /</Link><br />
	<Link path="/hello">Open /hello</Link><br />
	<Link path="/foo/world">Open /foo/world</Link><br />
	<Link path="/hello/bar">Open /hello/bar</Link><br />
</nav>

<br />

<Router>
	<Route path="/">
		<div>Hello, world! (/)</div>
	</Route>
	<Route path="/hello">
		<div>Hello, world! (/hello)</div>
	</Route>
	<Route path="/[hello]/world">
		<div>
			Hello, world! (/[hello]/world){" "}
			<pre>{JSON.stringify($store.params, null, 2)}</pre>
		</div>
	</Route>
	<Route path="/hello/[world]">
		<div>
			Hello, world! (/hello/[world]){" "}
			<pre>{JSON.stringify($store.params, null, 2)}</pre>
		</div>
	</Route>
</Router>
