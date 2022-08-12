<script lang="ts">
  import type { CountryComplete } from "$lib/types";

  export let country: CountryComplete;
</script>

<svelte:head>
  <title>REST Countries API | {country.name}</title>
</svelte:head>

<main>
  <p>{country.name}</p>
</main>
