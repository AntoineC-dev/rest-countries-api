import { writable } from "svelte/store";
import type { CountriesStore } from "$lib/types";
import { getAllCountries } from "$lib/api";

export const countriesStore = writable<CountriesStore>({ loading: true, countries: [], error: null });

export const fetchAllCountries = async () => {
  try {
    const countries = await getAllCountries();
    countriesStore.update((prev) => ({ ...prev, loading: false, countries }));
  } catch (error: any) {
    countriesStore.update((prev) => ({ ...prev, loading: false, error: error.message }));
  }
};
