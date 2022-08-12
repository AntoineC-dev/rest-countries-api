<script lang="ts">
  import SearchInput from "../components/SearchInput.svelte";
  import RegionSelect from "../components/RegionSelect.svelte";
  import CountryCard from "../components/CountryCard.svelte";
  import type { CountrySimple } from "../types";
  import { filterCountries } from "../helpers";

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

<main class="px-4 sm:px-6 py-6 sm:py-8 md:py-12">
  <div class="flex items-center flex-wrap sm:flex-nowrap container mx-auto justify-between gap-8">
    <SearchInput on:search={onSearch} />
    <RegionSelect on:filter={onFilter} />
  </div>
  <div
    class="container mx-auto my-8 md:my-12 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 justify-items-center gap-8 md:gap-12 lg:gap-16"
  >
    {#each filteredCountries as country (country.name)}
      <CountryCard {country} />
    {/each}
  </div>
</main>
