<script>
    // @ts-ignore
    import Collection from "./CollectionsView.svelte";
    import { onMount, afterUpdate } from "svelte";
    /** 
     * @type {Collection?}
     */
    export let collection;
    
    /**
     * @type {Object[]}
     */
    export let todos = [];

    afterUpdate(async () => {
        //TODO (API): Fetch todos from API
        if(collection != null) {
            const response = await fetch(`https://jsonplaceholder.typicode.com/todos/?_limit=${collection.id}`);
            todos = await response.json();
        }
    });

    /**
     * @type {Object?}
     */
    export let selectedTodo = null;
</script>


<div class="bg-neutral-700 w-1/3 h-full pt-10 overflow-auto">
    {#if collection != null}
        <h1 class="text-neutral-300"> {collection.title} </h1>
    {:else}
        <h1 class="text-emerald-400"> Select a collection to get started </h1>
    {/if}

    {#each todos as todo}
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div class="bg-neutral-800 m-2 p-2 rounded-lg block"
             on:click={()=>{selectedTodo = todo;}}>
             {#if todo.completed} 
                <input type="checkbox" class="m-2" checked/>
             {:else}
                <input type="checkbox" class="m-2"/>
             {/if}
            <h1 class="text-neutral-300"> {todo.title} </h1>
        </div>
    {/each}
</div>