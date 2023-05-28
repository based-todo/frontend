<script>    
    let minimized = false;
    function handleMinmaxCicked() {
        minimized = !minimized;
    }
</script>


{#if minimized}
<div class="h-0 bg-stone-700 border-b-2 border-b-stone-900 flex transition-all" id="top_bar">
    <div class="flex flex-col justify-between">
        <a href="/" class="flex items-center h-0 px-4" id="top_bar_logo">
            <img src="logo.svg" alt="logo" class="hidden" width="48px" height="0px" id="top_bar_logo_img">
            <span class="text-stone-200 text-3xl hidden" id="top_bar_logo_text"> based-todo </span>
        </a>
        <button class="h-7 w-32 mx-14 mb-0 border-2 border-t-0 border-stone-900 bg-stone-700 hover:bg-stone-600 transition-colors rounded-bl-lg rounded-br-lg z-10"
                id="top_bar_minmax" on:click={handleMinmaxCicked}>
                <svg id="top_bar_minmax_max" height="30px" class="fill-stone-900 m-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/></svg>
        </button>
    </div>
</div>
{:else}
<div class="h-20 bg-stone-700 border-b-2 border-b-stone-900 flex transition-all" id="top_bar">
    <div class="flex flex-col justify-between">
        <a href="/" class="flex items-center h-10 px-4" id="top_bar_logo">
            <img src="logo.svg" alt="logo" class="h-12" width="48px" id="top_bar_logo_img">
            <span class="text-stone-200 text-3xl" id="top_bar_logo_text"> based-todo </span>
        </a>
        <button class="h-7 w-32 mx-auto mb-0 border-2 border-b-0 border-stone-900 bg-stone-700 hover:bg-stone-600 transition-colors rounded-tl-lg rounded-tr-lg z-10"
                id="top_bar_minmax" on:click={handleMinmaxCicked}>
                <svg id="top_bar_minmax_min" height="30px" class="fill-stone-900 m-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M182.6 137.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8H288c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z"/></svg>
        </button>
    </div>
</div>
{/if}
