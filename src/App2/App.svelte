<script>
	import Thing from "./Thing.svelte"
	import { afterUpdate, onMount } from "svelte"

	const LOCALSTORAGE_KEY = "svelte-todo-app"

	let state = {
		next: {
			checked: false,
			text: "",
		},
		todos: [],
	}

	onMount(() => {
		const state_str = localStorage.getItem(LOCALSTORAGE_KEY)
		if (!state_str) {
			// No-op
			return
		}
		state = JSON.parse(state_str)
	})

	afterUpdate(() => {
		localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(state))
	})

	// Adds the next todo.
	function handleAddTodo() {
		state.todos = [
			{
				id: Math.random().toString(16).slice(2, 4),
				checked: state.next.checked,
				text: state.next.text,
			},
			...state.todos,
		]
		state.next = { checked: false, text: "" }
	}

	// Removes the current todo.
	function handleRemoveTodo(id) {
		state.todos = state.todos.filter(todo => todo.id !== id)
	}
</script>

<Thing />

<form on:submit|preventDefault={handleAddTodo}>
	<input type="checkbox" bind:checked={state.next.checked} />
	<input type="text" bind:value={state.next.text} />
	<button type="submit">+</button>
</form>

{#each state.todos as todo (todo.id)}
	<input type="checkbox" bind:checked={todo.checked} />
	<input type="text" bind:value={todo.text} />
	<button on:click={() => handleRemoveTodo(todo.id)}>-</button>
	<br />
{/each}

<!-- DEBUG -->
<pre>
	{JSON.stringify(state, null, 2)}
</pre>

<!-- DEBUG -->
<style>
	input {
		color: red;
	}

	input {
		background-color: red;
	}
</style>
