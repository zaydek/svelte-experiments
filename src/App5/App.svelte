<script>
	import Link from "./Link.svelte"
	import Redirect from "./Redirect.svelte"
	import Route from "./Route.svelte"
</script>

<!-- Nav -->
<nav>
	<Link path="/a">open page a</Link><br />
	<Link path="/b">open page b</Link><br />
	<Link path="/c">open page c</Link><br />
	<Link path="/d">open page d</Link><br />
	<Link path="/404">open page 404</Link><br />
	<!-- <Link path="https://google.com">open google.com</Link><br /> -->
</nav>

<!-- Home -->
<Route path="*">
	<h1>Hello, world! (/)</h1>
</Route>

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

<Route path="/404">
	<Redirect
		path="/a"
		before={() => {
			console.log("~ This is before ~")
		}}
		after={() => {
			window.scrollTo(0, 20)
			console.log("~ This is after ~")
		}}
	/>
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
