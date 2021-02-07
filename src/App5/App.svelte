<script>
	import Link from "./router/Link.svelte"
	import Redirect from "./router/Redirect.svelte"
	import Route from "./router/Route.svelte"
</script>

<!-- Nav -->
<nav>
	<Link path="/a" y={20}>open page a</Link><br />
	<Link path="/b">open page b</Link><br />
	<Link path="/c">open page c</Link><br />
	<Link path="/d">open page d</Link><br />
	<Link path="/404">open page 404</Link><br />
	<Link path="https://google.com">open google.com</Link><br />
</nav>

<!-- Home -->
<Route path="*">
	<h1>Hello, world! (/)</h1>
</Route>

<!-- Pages -->
<Route path="/a">
	<h1>Hello, world! (/a)</h1>
	<!-- <svelte:head>
		<title>Hello, world!</title>
	</svelte:head> -->
</Route>
<Route path="/b">
	<h1>Hello, world! (/b)</h1>
	<!-- <svelte:head>
		<title>Hello, world! (/b)</title>
	</svelte:head> -->
</Route>
<Route path="/c">
	<h1>Hello, world! (/c)</h1>
	<!-- <svelte:head>
		<title>Hello, world! (/c)</title>
	</svelte:head> -->
</Route>
<Route path="/d">
	<h1>Hello, world! (/d)</h1>
	<!-- <svelte:head>
		<title>Hello, world! (/d)</title>
	</svelte:head> -->
</Route>

<Route path="/404">
	<Redirect path="/a" />
</Route>

<div>Hello</div>
<div>Hello</div>
<div>Hello</div>
<div>Hello</div>
<div>Hello</div>
<div>Hello</div>
<div>Hello</div>
<div>Hello</div>
<div>Hello</div>
<div>Hello</div>
<div>Hello</div>
<div>Hello</div>
<div>Hello</div>
<div>Hello</div>
<div>Hello</div>
<div>Hello</div>
<div>Hello</div>
<div>Hello</div>
<div>Hello</div>
<div>Hello</div>
<div>Hello</div>
<div>Hello</div>
<div>Hello</div>
<div>Hello</div>
<div>Hello</div>
<div>Hello</div>
<div>Hello</div>
<div>Hello</div>
<div>Hello</div>
<div>Hello</div>
<div>Hello</div>
<div>Hello</div>
<div>Hello</div>
<div>Hello</div>
<div>Hello</div>
<div>Hello</div>
<div>Hello</div>
<div>Hello</div>
<div>Hello</div>
<div>Hello</div>
<div>Hello</div>
<div>Hello</div>
<div>Hello</div>
<div>Hello</div>
<div>Hello</div>
<div>Hello</div>
<div>Hello</div>
<div>Hello</div>
<div>Hello</div>
<div>Hello</div>
<div>Hello</div>
<div>Hello</div>
<div>Hello</div>
<div>Hello</div>
<div>Hello</div>
<div>Hello</div>
<div>Hello</div>
<div>Hello</div>
<div>Hello</div>
<div>Hello</div>
<div>Hello</div>
<div>Hello</div>
<div>Hello</div>
<div>Hello</div>
<div>Hello</div>
<div>Hello</div>
<div>Hello</div>
<div>Hello</div>
<div>Hello</div>
<div>Hello</div>
<div>Hello</div>
<div>Hello</div>
<div>Hello</div>
<div>Hello</div>
<div>Hello</div>
<div>Hello</div>
<div>Hello</div>
<div>Hello</div>
<div>Hello</div>
<div>Hello</div>
<div>Hello</div>
<div>Hello</div>
<div>Hello</div>
<div>Hello</div>
<div>Hello</div>
<div>Hello</div>
<div>Hello</div>
<div>Hello</div>
<div>Hello</div>
<div>Hello</div>
<div>Hello</div>
<div>Hello</div>
<div>Hello</div>
<div>Hello</div>
<div>Hello</div>
<div>Hello</div>
<div>Hello</div>
<div>Hello</div>
