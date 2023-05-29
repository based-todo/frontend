<script>
  // @ts-ignore
  import { Todo } from "../model/Todo";

  /**
   * @type {Todo?}
   */
  export let selectedTodo;

  $: selectedTodo && console.log("changed", selectedTodo);
</script>

<div class="bg-neutral-800 w-2/5 h-full p-5">
  {#if selectedTodo == null}
    <h1 class="text-3xl text-emerald-400 p-2">Select a todo to get started</h1>
    <hr class="border-emerald-200" />
  {:else}
    <div class="h-full flex flex-col">
      <div class="p-2 py-2 text-3xl flex flex-row">
        <input
          type="checkbox"
          class="w-7 h-7 accent-emerald-500 my-auto"
          bind:checked={selectedTodo.completed}
        />
        <div class="mx-4 border-l border-emerald-200" />
        <input
          type="date"
          class="text-m bg-emerald-500 text-neutral-900"
          bind:value={selectedTodo.duedate}
        />
        <div class="mx-4 border-l border-emerald-200" />
        <button class="text-emerald-200 fill-emerald-200 hover:text-emerald-400 hover:fill-emerald-400">
            <svg class="inline" xmlns="http://www.w3.org/2000/svg" width="32px" height="32px" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V173.3c0-17-6.7-33.3-18.7-45.3L352 50.7C340 38.7 323.7 32 306.7 32H64zm0 96c0-17.7 14.3-32 32-32H288c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V128zM224 288a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>
            <span>Save</span>
        </button>
        <div class="mx-4 border-l border-emerald-200" />
        <button class="text-emerald-200 fill-emerald-200 hover:text-emerald-400 hover:fill-emerald-400">
            <svg class="inline" xmlns="http://www.w3.org/2000/svg" width="32px" height="32px" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>
            <span>Delete</span>
        </button>
      </div>
      <hr class="border-emerald-200" />
      <input
        type="text"
        class="text-3xl text-emerald-50 my-2 w-full bg-neutral-800 outline-emerald-200 text-ellipsis"
        bind:value={selectedTodo.title}
      />

      <textarea
        class="w-full h-full p-2 my-4 text-emerald-50 bg-neutral-800 outline-emerald-200 overflow-auto"
        placeholder="Write a todo body..."
      >
        {selectedTodo.body}
      </textarea>
      <div class="my-2 flex flex-col">
        {#each selectedTodo.attachments as attachment} 
            <div class="w-full bg-neutral-400 hover:bg-emerald-300 transition-colors flex flex-row justify-between p-1">
                <a class="w-full" href={attachment.url}>
                    <svg class="inline my-auto mx-1" xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 384 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zm384 64H256V0L384 128z"/></svg>
                    {attachment.title}
                </a>
                <svg class="inline my-auto hover:fill-red-500 transition-colors cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>
            </div>
        {/each}
      </div>
        <button class="bg-neutral-400 hover:bg-emerald-400 transition-colors w-full h-9 flex flex-row p-1">
            <svg class="my-auto inline mx-1" xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M364.2 83.8c-24.4-24.4-64-24.4-88.4 0l-184 184c-42.1 42.1-42.1 110.3 0 152.4s110.3 42.1 152.4 0l152-152c10.9-10.9 28.7-10.9 39.6 0s10.9 28.7 0 39.6l-152 152c-64 64-167.6 64-231.6 0s-64-167.6 0-231.6l184-184c46.3-46.3 121.3-46.3 167.6 0s46.3 121.3 0 167.6l-176 176c-28.6 28.6-75 28.6-103.6 0s-28.6-75 0-103.6l144-144c10.9-10.9 28.7-10.9 39.6 0s10.9 28.7 0 39.6l-144 144c-6.7 6.7-6.7 17.7 0 24.4s17.7 6.7 24.4 0l176-176c24.4-24.4 24.4-64 0-88.4z"/></svg>
            <span>Add attachment</span>
        </button>
    </div>
  {/if}
</div>
