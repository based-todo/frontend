<script>
	import '../app.css';
	import Header from '../components/Header.svelte';

	
</script>

<div class="bg-stone-600 h-screen flex flex-col">
	<Header />
	<main class="flex flex-row h-full overflow-hidden">
		<slot />
	</main>
</div>
