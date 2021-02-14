import { getServerProps } from "./App.svelte"

async function run() {
	console.log("getServerSideProps=", await getServerProps())
}

run()
