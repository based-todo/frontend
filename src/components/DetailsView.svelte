
<script>
    import { onMount, afterUpdate } from "svelte";
    
    export let selectedTodo;
    let expandedTodo = null;

    onMount(() => {
        if(selectedTodo != null) {
            fetch(`https://jsonplaceholder.typicode.com/posts/${selectedTodo.id}`)
                .then(response => response.json())
                .then(data => expandedTodo = data);
        }
    })

    afterUpdate(() => {
        if(selectedTodo != null) {
            fetch(`https://jsonplaceholder.typicode.com/posts/${selectedTodo.id}`)
                .then(response => response.json())
                .then(data => expandedTodo = data);
        }
    });
</script>


<div class="bg-neutral-800 w-1/2 h-full pt-10">
    {#if expandedTodo != null}
        <h1 class="text-neutral-300"> Details</h1>
        <input type="text" class="m-2" value={expandedTodo.title}/>
        <textarea class="m-2" rows="10" value={expandedTodo.body}/>
    {:else}
        <h1 class="text-emerald-400"> Select a todo to get started </h1>
    {/if}
    
</div>