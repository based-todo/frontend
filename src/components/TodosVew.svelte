<script>
    /* @ts-ignore */
    import { Collection } from '../model/Collection.js';
    import { Todo } from '../model/Todo.js';

    /** 
     * @type {Collection?}
     */
    export let selectedCollection;
    /**
   * @type {Todo[]}
   */
    let todos = [];
    /**
     * @type {Todo?}
     */
    export let selectedTodo;

    async function fetchTodos() {
        if(selectedCollection == null) return;
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos?_limit=${selectedCollection.id}`);
        todos = (await response.json()).map((/** @type {{ id: string; title: string; completed: boolean; userId: string; }} */ todo) => new Todo(
            todo.id,
            todo.title,
            "some body",
            todo.completed,
            todo.userId,
            "some duedate"
        ));
    }

    $: selectedCollection && fetchTodos();
    $: selectedTodo && (() => { console.log("changed todo"); })();
</script>


<div class="bg-neutral-700 w-1/3 h-full pt-10 overflow-auto">
    {#if selectedCollection == null}
        <h1 class="text-emerald-400"> Select a collection to get started </h1>
    {:else}
        <h1 class="text-neutral-300"> {selectedCollection.title} </h1>
        <hr />
        {#each todos as todo}
            {#if todo === selectedTodo}
                <div class="bg-emerald-400 m-2 cursor-pointer">
                    <h1> {todo.title} </h1>
                </div>
            {:else}
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <div class="bg-neutral-400 hover:bg-emerald-400 m-2 cursor-pointer" on:click={() => selectedTodo = todo}>
                    <h1> {todo.title} </h1>
                </div>
            {/if}
        {/each}
    {/if}
</div>