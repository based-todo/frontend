<script>
    import { onMount } from "svelte";
    // @ts-ignore
    import { Collection } from "../model/Collection.js";

    /**
   * @type {Collection[]}
   */
    let collections = [];
    /**
     * @type {Collection?}
    */
    export let selectedCollection;

    onMount(async () => {
        //TODO (API): Fetch collections from API
        const response = await fetch("https://jsonplaceholder.typicode.com/albums/?_limit=10");
        collections = await response.json();
    });
</script>

<div class="bg-neutral-800 w-1/6 h-full p-3 pt-10">
    {#each collections as collection}
        {#if selectedCollection === collection}
            <button class="bg-slate-400 m-2 block w-full">
                <h1> {collection.title} </h1>
            </button>
        {:else}
        <button class="bg-neutral-400 hover:bg-slate-400 m-2 block w-full"
            on:click={()=>{
                selectedCollection = collection;
            }}>
            <h1> {collection.title} </h1>
        </button>
        {/if}
    {/each}
</div>