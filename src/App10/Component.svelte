<script>
	import SVETLANA_ROUTER_KEY from "./key.js"

	import { getContext } from "svelte"

	const data = getContext(SVETLANA_ROUTER_KEY)
</script>

<p>The context data is:</p>
<pre>{JSON.stringify(data, null, 2)}</pre>
