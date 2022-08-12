<script lang="ts">
  import type { CountrySimple } from "../types";

  export let country: CountrySimple;
</script>

<div class="flex flex-col max-w-xs bg-white dark:bg-blue-100 shadow-custom rounded-md overflow-hidden">
  <img src={country.flag} alt="" />
  <div class="flex flex-col px-6 pt-8 pb-12 gap-6">
    <span class="text-lg font-bold leading-none">{country.name}</span>
    <div class="flex flex-col gap-3 text-sm leading-none">
      <span>Population: <span class="font-light">{country.population}</span></span>
      <span>Region: <span class="font-light">{country.region}</span></span>
      <span>Capital: <span class="font-light">{country.capital}</span></span>
    </div>
  </div>
</div>
