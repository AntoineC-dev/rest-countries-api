<script lang="ts">
  import "../app.css";
  import { onMount } from "svelte";
  import { theme, fetchAllCountries, countriesStore } from "$lib/stores";
  import Header from "$lib/components/Header.svelte";
  import LoadingOverlay from "$lib/components/LoadingOverlay.svelte";
  import ScrollToTop from "$lib/components/ScrollToTop.svelte";

  let root: HTMLElement;
  onMount(async () => {
    root = document.documentElement;
    await fetchAllCountries(); // Cache all countries in a svelte store
  });
  $: root && root.classList.toggle("dark", $theme.mode === "dark"); // Handle theme mode
</script>

<Header />

{#if $countriesStore.loading}
  <LoadingOverlay />
{:else}
  <slot />
{/if}

<ScrollToTop />
