<script>
  import { onMount } from "svelte";
  import FuzzySearch from "fuzzy-search";
  import { getAuth, baseUrl } from "../model/auth.js";
  // @ts-ignore
  import { Collection, deleteCollection, addCollection } from "../model/Collection.js";

  /**
   * @type {Collection[]}
   */
  let collections = [];
  $: filteredCollections = ((_collections) => {
    if (serachQuery === "") return _collections;
    const searcher = new FuzzySearch(_collections, ["title"]);
    return searcher.search(serachQuery);
  })(collections);
  
  /**
   * @type {Collection?}
   */
  export let selectedCollection;

  let serachQuery = "";
  /**
   * @type {string}
   */
  let auth;

  onMount(async () => {
    let auth_p = getAuth();
    if (auth_p === null) {
      window.location.href = "/login";
      return;
    }
    auth = auth_p;

    const response = await fetch(`${baseUrl}/api/v1/collections`, {
      headers: {
        Authorization: `${auth}`,
      },
    });

    const dtos = await response.json();
    console.log(dtos);
    collections = dtos.map((/** @type {{ id: string; data: { name: string; items: string[]; }; }} */ collectionDTO) => {
      return new Collection(
        collectionDTO.id,
        collectionDTO.data.name,
        collectionDTO.data.items
      );
    });
  });
  
  $: if (selectedCollection == null && filteredCollections.length > 0) {
    selectedCollection = filteredCollections[0];
  }

</script>

<div
  class="bg-neutral-800 w-1/5 h-full p-3 pt-10 overflow-x-hidden overflow-y-auto"
>
  <div class="bg-stone-600 rounded-lg border-2 border-emerald-200">
    <h1 class="text-2xl text-emerald-500 p-3">Todo Collections</h1>
    <!-- <hr class="border-emerald-200" /> -->
    <div class="flex flex-row p-1 mx-2 border border-emerald-500 rounded-sm">
      <svg class="w-6 ml-2 fill-emerald-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
      <input type="text" class="p-3 w-full text-m bg-stone-600 outline-none text-ellipsis " bind:value={serachQuery}/>
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <svg on:click={async () => {collections = await addCollection(auth, baseUrl, collections, serachQuery); serachQuery = ""; }} class={`${serachQuery !== ""?"opacity-100 cursor-pointer":"opacity-0"} transition-all w-6 mr-2 fill-emerald-200 hover:fill-emerald-500`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/></svg>
    </div>
    <!-- <hr class="border-emerald-200" /> -->
    <div class="p-3">
      {#if filteredCollections.length === 0}
        <h1 class="text-emerald-500">No collections found. Maybe create one?</h1>
      {/if}
      {#each filteredCollections as collection}
          <!-- svelte-ignore a11y-click-events-have-key-events -->
          <div
            class={`${(selectedCollection === collection)?"bg-emerald-500":"bg-neutral-400"} hover:bg-emerald-500 p-1 rounded-sm cursor-pointer transition-colors group/colect flex flex-row justify-between`}
            on:click={() => {
              selectedCollection = collection;
            }}
          >
            <h2 class="text-slate-800">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 inline fill-slate-800" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M40 48C26.7 48 16 58.7 16 72v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V72c0-13.3-10.7-24-24-24H40zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zM16 232v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V232c0-13.3-10.7-24-24-24H40c-13.3 0-24 10.7-24 24zM40 368c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V392c0-13.3-10.7-24-24-24H40z"/></svg>
              {collection.title}
            </h2>
            <svg on:click={async (event)=> { event.preventDefault(); collections = await deleteCollection(auth, baseUrl, collections, collection);}} width="16px" height="16px" class={`my-auto min-w-min transition-colors fill-slate-800 invisible group-hover/colect:visible hover:fill-red-500`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>
          </div>
      {/each}
    </div>
  </div>
</div>
