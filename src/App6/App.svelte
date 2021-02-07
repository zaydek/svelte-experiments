<script>
	import Layout from "./Layout.svelte"
	import Link from "../App6/router/Link.svelte"
	import Route from "../App6/router/Route.svelte"
</script>

<nav>
	<Link path="/a">open page a</Link><br />
	<Link path="/b">open page b</Link><br />
	<Link path="/c">open page c</Link><br />
</nav>

<Layout style="color: red">
	<Layout style="color: green">
		<Layout style="color: blue">
			<Route path="/a">
				<div>Hello, world! (/a)</div>
			</Route>
			<Route path="/b">
				<div>Hello, world! (/b)</div>
			</Route>
			<Route path="/c">
				<div>Hello, world! (/c)</div>
			</Route>
		</Layout>
	</Layout>
</Layout>
