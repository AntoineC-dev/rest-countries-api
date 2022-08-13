<script lang="ts">
  import { debounce } from "$lib/helpers";
  import { filters, updateFilter } from "$lib/stores";

  let value: string = $filters.name;

  const onChange = debounce(() => updateFilter("name", value.trim()), 250); // Runs only if user stops typing for 500ms
  $: value && onChange();

  const onClear = () => {
    value = "";
    updateFilter("name", value);
  };
</script>

<div
  class="flex items-center px-4 py-2 gap-2 bg-white dark:bg-blue-100 shadow-custom w-full sm:max-w-md xl:max-w-lg rounded-md"
>
  <svg xmlns="http://www.w3.org/2000/svg" class="w-5 aspect-auto m-2" viewBox="0 0 20 20" fill="currentColor">
    <path
      fill-rule="evenodd"
      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
      clip-rule="evenodd"
    />
  </svg>

  <input
    type="text"
    aria-label="Search for a country by name"
    bind:value
    placeholder="Search for a country..."
    class="bg-transparent text-sm outline-none p-2 w-full"
  />
  {#if !!value}
    <button type="button" aria-label="Clear search bar" on:click={onClear} class="p-2">
      <svg xmlns="http://www.w3.org/2000/svg" class="w-5 aspect-auto" viewBox="0 0 20 20" fill="currentColor">
        <path
          fill-rule="evenodd"
          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
          clip-rule="evenodd"
        />
      </svg>
    </button>
  {/if}
</div>
