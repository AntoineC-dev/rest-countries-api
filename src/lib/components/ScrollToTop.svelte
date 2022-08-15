<script lang="ts">
  export let threshold: number = 150;
  let isVisible: Boolean = false;

  const goTop = () => document.body.scrollIntoView();
  const scrollContainer = () => document.documentElement || document.body;
  const handleOnScroll = () => {
    if (!scrollContainer()) return;
    isVisible = scrollContainer().scrollTop > threshold ? true : false;
  };
</script>

<svelte:window on:scroll={handleOnScroll} />

<aside
  class:opacity-0={!isVisible}
  class:pointer-events-none={!isVisible}
  class="fixed bottom-6 right-6 transition-opacity duration-300"
>
  <button
    aria-label="Go back to top"
    class="bg-white dark:bg-blue-100 rounded-full p-4"
    disabled={!isVisible}
    on:click={goTop}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      stroke-width="2"
    >
      <path stroke-linecap="round" stroke-linejoin="round" d="M5 15l7-7 7 7" />
    </svg>
  </button>
</aside>
