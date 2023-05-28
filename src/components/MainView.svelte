<script>
    import CollectionsView from "./CollectionsView.svelte";
    import TodosVew from "./TodosVew.svelte";
    import DetailsView from "./DetailsView.svelte";

    // @ts-ignore
    import { Collection } from "../model/Collection.js";
    // @ts-ignore
    import { Todo } from "../model/Todo.js";
    
    /**
     * @type {Collection?}
     */
    let selectedCollection = null;
    
    /**
     * @type {Todo?}
    */
    // @ts-ignore
    let selectedTodo = null;
</script>


<CollectionsView bind:selectedCollection />
<TodosVew bind:selectedCollection bind:selectedTodo />
<DetailsView bind:selectedTodo />