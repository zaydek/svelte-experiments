<script>
	import Link from "./router/Link.svelte"
	import Redirect from "./router/Redirect.svelte"
	import Route from "./router/Route.svelte"

	import Home from "./Home.svelte"
	import A from "./A.svelte"
	import B from "./B.svelte"
	import C from "./C.svelte"
	import D from "./D.svelte"
</script>

<nav>
	<Link path="/a" scrollY={20}>open page a</Link><br />
	<Link path="/b">open page b</Link><br />
	<Link path="/c">open page c</Link><br />
	<Link path="/d">open page d</Link><br />
	<Link path="/404">open page 404</Link><br />
	<Link path="https://google.com">open google.com</Link><br />
</nav>

<Route path="*">
	<Home />
</Route>
<Route path="/a">
	<A />
</Route>
<Route path="/b">
	<B />
</Route>
<Route path="/c">
	<C />
</Route>
<Route path="/d">
	<D />
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
