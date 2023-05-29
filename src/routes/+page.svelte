<script>
 import MainView from "../components/MainView.svelte";
 import { getAuth } from "../model/auth.js";
 import { onMount } from "svelte";


onMount(() => {
   const auth = getAuth();
   if (auth == null) {
	 window.location.href = "/login";
   }
 });
</script>

<svelte:head>
	<title>based-todo</title>
</svelte:head>

<MainView />