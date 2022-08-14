<script lang="ts">
  import type { CountrySimple } from "$lib/types";

  export let country: CountrySimple;
  const href = `/countries/${country.code}`;
</script>

<a
  {href}
  class="flex flex-col max-w-sm w-full bg-white dark:bg-blue-100 shadow-custom rounded-md overflow-hidden ring-focus"
>
  <img src={country.flag} alt="Flag of {country.name}" />
  <div class="flex flex-col px-6 pt-8 pb-12 gap-6">
    <span class="text-lg font-bold leading-none">{country.name}</span>
    <div class="flex flex-col gap-3 text-sm leading-none">
      <span>Population: <span class="font-light">{country.population}</span></span>
      <span>Region: <span class="font-light">{country.region}</span></span>
      <span>Capital: <span class="font-light">{country.capital}</span></span>
    </div>
  </div>
</a>
