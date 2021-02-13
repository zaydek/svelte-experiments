<script>
	import Thing from "./Thing.svelte"

	let auth = false
	let authError = ""
	let username = ""
	let password = ""

	function handleChangeUsername(e) {
		username = e.target.value
		authError = "" // Reset
	}

	function handleChangePassword(e) {
		password = e.target.value
		authError = "" // Reset
	}

	function handleSubmitLogin() {
		if (username === "") {
			authError = "Your username cannot be empty."
			return
		}
		if (password === "") {
			authError = "Your password cannot be empty."
			return
		}
		auth = true
	}

	function handleSubmitLogout() {
		auth = false
		username = "" // Reset
		password = "" // Reset
	}
</script>

<Thing />

<!-- prettier-ignore -->
{#if !auth}
	<form on:submit|preventDefault={handleSubmitLogin}>
		<input
			type="text"
			value={username}
			placeholder="Username"
			on:input={handleChangeUsername}
		/>
		<br />
		<input
			type="text"
			value={password}
			placeholder="Password"
			on:input={handleChangePassword}
		/>
		<button type="submit">Login</button>
		{#if authError}
			<p>{authError}</p>
		{/if}
	</form>
{/if}

{#if auth}
	<h1>Welcome back, @{username}!</h1>
	<button on:click={handleSubmitLogout}>Logout</button>
{/if}

<!-- DEBUG -->
<pre>
	{JSON.stringify({ auth, authError, username, password }, null, 2)}
</pre>
