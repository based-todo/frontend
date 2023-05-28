<script>
    import CollectionsView from "./CollectionsView.svelte";
    import TodosVew from "./TodosVew.svelte";
    import DetailsView from "./DetailsView.svelte";
    // @ts-ignore
    import Collection from "./CollectionsView.svelte";
    
    /**
     * @type {Collection?}
     */
    let currentCollection = null;
    /**
     * @type {Object?}
    */
    let selectedTodo = null;
</script>

<CollectionsView bind:selectedCollection={currentCollection} />
<TodosVew bind:collection={currentCollection} bind:selectedTodo={selectedTodo} />
<DetailsView bind:selectedTodo={selectedTodo}/>
```