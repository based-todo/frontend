<script>
    import { onMount } from 'svelte';

    let elements = [];

    onMount(async () => {
        const res = await fetch('http://jsonplaceholder.typicode.com/todos/?_limit=3');
        elements = await res.json();
    });
</script>

<h1>My List</h1>

<ul>
    {#each elements as element}
        <li>{element.title}</li>
    {/each}
</ul>