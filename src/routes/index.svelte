<script lang="ts">
  import SearchInput from "../components/SearchInput.svelte";
  import RegionSelect from "../components/RegionSelect.svelte";
  import CountryCard from "../components/CountryCard.svelte";
  import type { CountrySimple } from "src/types";

  export let countries: CountrySimple[];
  console.log(countries);

  const onSearch = (e: CustomEvent<{ str: string }>) => {
    console.log(e.detail.str);
  };

  const onFilter = (e: CustomEvent<{ region: string }>) => {
    console.log(e.detail.region);
  };
</script>

<svelte:head>
  <title>Frontend Mentor | REST Countries API</title>
</svelte:head>

<main class="px-4 sm:px-6 py-6 sm:py-8 lg:py-12">
  <div class="flex items-center flex-wrap container mx-auto justify-between gap-8">
    <SearchInput on:search={onSearch} />
    <RegionSelect on:filter={onFilter} />
  </div>
  <div
    class="container mx-auto my-8 lg:my-12 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 justify-items-center gap-8"
  >
    {#each countries as country (country.name)}
      <CountryCard {country} />
    {/each}
  </div>
</main>
