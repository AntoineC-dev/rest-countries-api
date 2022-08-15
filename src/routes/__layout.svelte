<script lang="ts">
  import "../app.css";
  import { onMount } from "svelte";
  import { theme, fetchAllCountries, countriesStore } from "$lib/stores";
  import Header from "$lib/components/Header.svelte";
  import LoadingOverlay from "$lib/components/LoadingOverlay.svelte";

  // Handle light/dark theme
  let root: HTMLElement;
  onMount(async () => {
    root = document.documentElement;
    await fetchAllCountries();
  });
  $: root && root.classList.toggle("dark", $theme.mode === "dark");
</script>

<Header />

{#if $countriesStore.loading}
  <LoadingOverlay />
{:else}
  <slot />
{/if}
