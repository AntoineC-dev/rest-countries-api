<script lang="ts">
  import { navigating } from "$app/stores";

  $: showOverlay = $navigating !== null;
</script>

<aside
  class:pointer-events-none={!showOverlay}
  class:opacity-0={!showOverlay}
  class="fixed top-0 left-0 w-full h-screen bg-white/80 dark:bg-blue-100/80 z-50 transition-opacity duration-150 grid place-content-center"
  on:click|stopPropagation={() => false}
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class:animate-spin={showOverlay}
    class="w-16 aspect-auto"
    fill="currentColor"
    viewBox="0 0 256 256"
    ><rect width="256" height="256" fill="none" /><line
      x1="128"
      y1="32"
      x2="128"
      y2="64"
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="24"
    /><line
      x1="224"
      y1="128"
      x2="192"
      y2="128"
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="24"
    /><line
      x1="195.9"
      y1="195.9"
      x2="173.3"
      y2="173.3"
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="24"
    /><line
      x1="128"
      y1="224"
      x2="128"
      y2="192"
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="24"
    /><line
      x1="60.1"
      y1="195.9"
      x2="82.7"
      y2="173.3"
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="24"
    /><line
      x1="32"
      y1="128"
      x2="64"
      y2="128"
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="24"
    /><line
      x1="60.1"
      y1="60.1"
      x2="82.7"
      y2="82.7"
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="24"
    /></svg
  >
</aside>
