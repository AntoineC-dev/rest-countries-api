import { writable } from "svelte/store";
import type { CountriesStore } from "$lib/types";
import { getAllCountries } from "$lib/api";

export const countriesStore = writable<CountriesStore>({ loading: true, countries: [] });

export const fetchAllCountries = async () => {
  try {
    const countries = await getAllCountries();
    countriesStore.set({ loading: false, countries });
  } catch (error: any) {
    countriesStore.update((prev) => ({ ...prev, loading: false }));
    throw new Error(error.message);
  }
};
