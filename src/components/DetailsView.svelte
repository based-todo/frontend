
<script>
    // @ts-ignore
    import { Todo } from "../model/Todo";

    /** 
     * @type {Todo?}
     */
    export let selectedTodo;

    // $: selecteTodo && selec == selectedTodo;
</script>


<div class="bg-neutral-800 w-2/5 h-full pt-10">
    {#if selectedTodo == null}
        <h1 class="text-3xl text-emerald-400"> Select a todo to get started </h1>
    {:else}
        <h1 class="text-3xl text-emerald-400">{selectedTodo.title}</h1>
        <hr />
        <h1 class="text-2xl text-emerald-400">{selectedTodo.body}</h1>
    {/if}    
</div>