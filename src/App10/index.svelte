<script>
	import Route from "./router/Route.svelte"
	import Router from "./router/Router.svelte"
	import { store } from "./router/store.js"
</script>

<Router>
	<Route path="/">
		<div>Hello, world!</div>
	</Route>
	<Route path="/hello">
		<div>Hello, world!</div>
	</Route>
	<Route path="/hello/world">
		<div>
			Hello, <pre>{JSON.stringify($store.params, null, 2)}</pre>
			! (static)
		</div>
	</Route>
	<Route path="/[hello]/[world]">
		<div>
			Hello, <pre>{JSON.stringify($store.params, null, 2)}</pre>
			! (dynamic)
		</div>
	</Route>
</Router>
