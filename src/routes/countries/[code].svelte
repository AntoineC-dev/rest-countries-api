<script lang="ts">
  import { page } from "$app/stores";
  import { filterByCode } from "$lib/helpers";
  import { countriesStore } from "$lib/stores";

  const country = filterByCode($page.params["code"] as string, $countriesStore.countries);
</script>

<svelte:head>
  <title>REST Countries API | {country.name}</title>
</svelte:head>

<main class="px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-12">
  <div class="flex flex-col gap-16 container xl:max-w-screen-xl mx-auto">
    <button
      aria-label="Go back to previous page"
      type="button"
      on:click={() => window.history.back()}
      class="btn self-start px-4 py-1 font-light"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="w-4 aspect-auto" viewBox="0 0 20 20" fill="currentColor">
        <path
          fill-rule="evenodd"
          d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
          clip-rule="evenodd"
        />
      </svg>
      <span>Back</span>
    </button>
    <div class="lg:flex lg:items-center lg:gap-24 lg:justify-between">
      <img src={country.flag} alt="" class="shadow-custom w-full lg:max-w-md xl:max-w-2xl" />
      <div class="lg:flex-1">
        <h2 class="mt-12 font-bold text-3xl lg:mt-0">
          {country.name}
        </h2>
        <div class="sm:flex sm:gap-16 sm:justify-between">
          <ul class="flex flex-col leading-snug mt-8 gap-3">
            <li>Native Names: <span class="font-light">{country.nativeNames}</span></li>
            <li>Population: <span class="font-light">{country.population}</span></li>
            <li>Region: <span class="font-light">{country.region}</span></li>
            <li>Sub Region: <span class="font-light">{country.subregion}</span></li>
            <li>Capital: <span class="font-light">{country.capital}</span></li>
          </ul>
          <ul class="flex flex-col leading-snug mt-8 gap-3">
            <li>Top Level Domain: <span class="font-light">{country.tld}</span></li>
            <li>Currencies: <span class="font-light">{country.currencies}</span></li>
            <li>Languages: <span class="font-light">{country.languages}</span></li>
          </ul>
        </div>
        {#if country.borders.length !== 0}
          <div class="flex flex-col text-sm leading-none mt-12 gap-4">
            <h3 class="text-lg leading-none">Border Countries:</h3>
            <ul class="flex items-center gap-2 md:gap-3 flex-wrap">
              {#each country.borders as border (border.code)}
                <li>
                  <a href={`/countries/${border.code}`} class="btn px-4 py-1 text-sm font-light">{border.name}</a>
                </li>
              {/each}
            </ul>
          </div>
        {/if}
      </div>
    </div>
  </div>
</main>
