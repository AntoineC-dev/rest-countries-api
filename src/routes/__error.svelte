<script context="module" lang="ts">
  import type { Load } from "@sveltejs/kit";
  export const load: Load = async ({ error }) => {
    return {
      props: {
        error: error?.message,
      },
    };
  };
</script>

<script lang="ts">
  export let error: string;
</script>

<main class="m-auto p-8">
  <div class="flex flex-col gap-12 items-center">
    <h2 class="text-2xl">{error}</h2>
    <p class="text-center max-w-prose">
      We are sorry that you could not get this data for you. Please try again later and if the service is still down
      feel free to send us a report at this address
    </p>
    <div class="flex items-center gap-4">
      <button
        type="button"
        aria-label="Go back to previous page"
        on:click={() => window.history.back()}
        class="btn px-4 py-2"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 aspect-auto" viewBox="0 0 20 20" fill="currentColor">
          <path
            fill-rule="evenodd"
            d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
            clip-rule="evenodd"
          />
        </svg>
        <span>Try Again</span>
      </button>
      <span>or</span>
      <button
        type="button"
        aria-label="Go back to previous page"
        on:click={() => window.history.back()}
        class="btn px-4 py-2"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 aspect-auto" viewBox="0 0 20 20" fill="currentColor">
          <path
            fill-rule="evenodd"
            d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm2 10a1 1 0 10-2 0v3a1 1 0 102 0v-3zm2-3a1 1 0 011 1v5a1 1 0 11-2 0v-5a1 1 0 011-1zm4-1a1 1 0 10-2 0v7a1 1 0 102 0V8z"
            clip-rule="evenodd"
          />
        </svg>
        <span>Send Report</span>
      </button>
    </div>
  </div>
</main>
