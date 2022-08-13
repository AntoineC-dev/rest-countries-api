<script lang="ts">
  import { filters, updateFilter } from "$lib/stores";

  let open: boolean = false;
  const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];
  const onToggle = () => {
    open = !open;
  };
  const onClear = () => updateFilter("region", "");
  const onRegionSelected = (region: string) => {
    updateFilter("region", region);
    open = false;
  };
</script>

<div class="text-sm relative">
  <button
    type="button"
    aria-label="{open ? 'Close' : 'Open'} region dropdown"
    on:click={onToggle}
    class="flex items-center justify-between px-6 w-52 h-[3.25rem] bg-white dark:bg-blue-100 shadow-custom xs:max-w-md rounded-md"
  >
    <span>{!$filters.region ? "Filter by Region" : $filters.region}</span>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class:-rotate-180={open}
      class="w-4 aspect-auto transition-transform duration-300"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fill-rule="evenodd"
        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
        clip-rule="evenodd"
      />
    </svg>
  </button>
  <button
    type="button"
    aria-label="Clear selected region"
    on:click={onClear}
    disabled={open || !$filters.region}
    class:opacity-0={open || !$filters.region}
    class:pointer-events-none={open || !$filters.region}
    class="absolute right-0 top-1/2 sm:top-full -translate-y-1/2 sm:translate-y-0 translate-x-full sm:translate-x-0 text-xs text-blue-300/30 dark:text-white/30 flex items-center gap-2 p-1 transition-opacity"
  >
    <span>Clear</span>
    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 aspect-auto" viewBox="0 0 20 20" fill="currentColor">
      <path
        fill-rule="evenodd"
        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
        clip-rule="evenodd"
      />
    </svg>
  </button>
  <div
    class:scale-y-0={!open}
    class:opacity-0={!open}
    class="absolute top-full translate-y-1 left-0 w-full bg-white dark:bg-blue-100 rounded-md shadow-custom flex flex-col py-2 origin-top transition-all duration-300"
  >
    {#each regions as region (region)}
      <button
        type="button"
        aria-label="Select {region}"
        on:click={() => onRegionSelected(region)}
        class:opacity-0={!open}
        class="leading-none px-6 py-2 text-start hover:bg-gray-200/10 hover:dark:bg-blue-200 transition-all duration-300"
        >{region}</button
      >
    {/each}
  </div>
</div>
