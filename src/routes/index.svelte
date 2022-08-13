<script lang="ts">
  import SearchInput from "$lib/components/SearchInput.svelte";
  import RegionSelect from "$lib/components/RegionSelect.svelte";
  import CountryCard from "$lib/components/CountryCard.svelte";
  import type { CountrySimple } from "$lib/types";
  import { filterCountries } from "$lib/helpers";

  export let countries: CountrySimple[];
  let filters = { name: "", region: "" };

  const onSearch = (e: CustomEvent<{ name: string }>) => {
    filters.name = e.detail.name;
  };

  const onFilter = (e: CustomEvent<{ region: string }>) => {
    filters.region = e.detail.region;
  };

  $: filteredCountries = filterCountries(countries, filters);
</script>

<svelte:head>
  <title>Frontend Mentor | REST Countries API</title>
</svelte:head>

<main class="px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-12">
  <div class="flex items-center flex-wrap sm:flex-nowrap container mx-auto justify-between gap-8 xl:max-w-screen-xl">
    <SearchInput on:search={onSearch} />
    <RegionSelect on:filter={onFilter} />
  </div>
  <div
    class="container xl:max-w-screen-xl mx-auto my-8 md:my-12 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center gap-8 md:gap-12"
  >
    {#each filteredCountries as country (country.name)}
      <CountryCard {country} />
    {/each}
  </div>
</main>
