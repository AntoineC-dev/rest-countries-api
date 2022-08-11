<script lang="ts">
  import "../app.css";
  import { onMount } from "svelte";
  import { theme } from "../stores/theme.store";

  // Handle light/dark theme
  let root: HTMLElement;
  onMount(() => {
    root = document.documentElement;
  });
  $: root && root.classList.toggle("dark", $theme.mode === "dark");
</script>

<slot />
