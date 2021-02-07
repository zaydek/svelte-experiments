<script>
	import Link from "./Link.svelte"
	import Route from "./Route.svelte"
</script>

<!-- Nav -->
<nav>
	<Link path="/a">open page a</Link><br />
	<Link path="/b">open page b</Link><br />
	<Link path="/c">open page c</Link><br />
	<Link path="/d">open page d</Link><br />
	<Link path="https://google.com">open google.com</Link><br />
</nav>

<!-- Home -->
<!-- <Route path="*">
	<h1>Hello, world! (/)</h1>
</Route> -->

<!-- Pages -->
<Route path="/a">
	<h1>Hello, world! (/a)</h1>
</Route>
<Route path="/b">
	<h1>Hello, world! (/b)</h1>
</Route>
<Route path="/c">
	<h1>Hello, world! (/c)</h1>
</Route>
<Route path="/d">
	<h1>Hello, world! (/d)</h1>
</Route>
