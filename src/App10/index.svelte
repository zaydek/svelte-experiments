<script>
	import Route from "./router/Route.svelte"
	import Router from "./router/Router.svelte"
</script>

<Router>
	<Route path="/">
		<div>Hello, world!</div>
	</Route>
	<Route path="/hello">
		<div>Hello, world!</div>
	</Route>
	<Route path="/[hello]/[world]">
		<div>Hello, world!</div>
	</Route>
</Router>
