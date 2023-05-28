<script>
  import { prevent_default } from "svelte/internal";
  /* @ts-ignore */
  import { Collection } from "../model/Collection.js";
  import { Todo } from "../model/Todo.js";

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
    if (selectedCollection == null) return;
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/todos?_limit=${selectedCollection.id}`
    );
    todos = (await response.json()).map(
      (
        /** @type {{ id: string; title: string; completed: boolean; userId: string; }} */ todo
      ) =>
        new Todo(
          todo.id,
          todo.title,
          "some body",
          todo.completed,
          todo.userId,
          "some duedate"
        )
    );
  }

  $: selectedCollection && fetchTodos();
</script>

<div class="bg-neutral-700 w-2/5 h-full pt-10 p-5 overflow-auto">
  {#if selectedCollection == null}
    <h1 class="text-emerald-400 text-3xl">
      Select a collection to get started
    </h1>
    <hr class="border-emerald-200" />
  {:else}
    <div class="py-2 flex flex-row justify-between">
      <h1 class="text-emerald-400 text-3xl">{selectedCollection.title}</h1>
      <div class="flex flex-row items-center">
        <svg
          class="min-w-min min-h-min mx-1 fill-emerald-200 hover:fill-emerald-400"
          width="16px"
          height="16px"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          ><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
            d="M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z"
          /></svg
        >
        <div>
          <!-- svelte-ignore a11y-click-events-have-key-events -->
          <svg
          class="min-w-min min-h-min fill-emerald-200 hover:fill-emerald-400 outline-none"
          on:click={(event) => {
            event.preventDefault();
            const dropdown = document.getElementById("todoSettingsDropdown");
            // translate the dropdown to align with the mouse
            // @ts-ignore
            dropdown.style.transform = `translateX(${event.clientX}px) translateY(${event.clientY + 5}px)`;

            // enable the dropdown
            // @ts-ignore
            dropdown.classList.toggle("hidden");
            
          }}
          on:blur={(event) => {
            event.preventDefault();
            const dropdown = document.getElementById("todoSettingsDropdown");
            // @ts-ignore
            dropdown.classList.add("hidden");
          }}
          width="16px"
          height="16px"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 128 512"
          ><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
          d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"
          /></svg>
          
          <div id="todoSettingsDropdown" class="absolute hidden left-0 top-0 z-10 w-56 origin-top-right rounded-sm bg-neutral-700 border border-emerald-200" role="menu" aria-orientation="vertical" tabindex="0">
            <div>
              <button on:mousedown={ (event) => { event.preventDefault(); console.log("changed settings");}}>
                <input type="checkbox" checked class="accent-green-600 bg-gray-100 border-gray-300 rounded"/>
                <span class="text-emerald-200" > hide completed todos </span>
              </button>
              <hr class="border-emerald-200" />
              <button on:mousedown={ (event) => { event.preventDefault(); console.log("changed settings");}}>
                <input type="checkbox" checked class="accent-green-600 bg-gray-100 border-gray-300 rounded"/>
                <span class="text-emerald-200" > hide completed todos </span>
              </button>
            </div>
          </div>
        </div>
        
      </div>
    </div>
    <hr class="border-emerald-200" />
    <div class="p-2">
      {#each todos as todo}
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div
          class={`${
            selectedTodo === todo
              ? "bg-emerald-400"
              : "bg-neutral-400 hover:bg-emerald-300"
          } m-0 p-1 cursor-pointer transition-colors`}
          on:click={() => (selectedTodo = todo)}
        >
          <h2>
            <input type="checkbox" class="accent-green-600 bg-gray-100 border-gray-300 rounded" bind:checked={todo.completed} />
            <span>{todo.title}</span>
          </h2>
        </div>
      {/each}
    </div>
  {/if}
</div>
