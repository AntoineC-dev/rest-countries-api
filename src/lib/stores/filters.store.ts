import { writable } from "svelte/store";
import type { CountryFilter } from "$lib/types";

export const filters = writable<CountryFilter>({ name: "", region: "" });

export const updateFilter = (key: "name" | "region", value: string) =>
  filters.update((prev) => ({ ...prev, [key]: value }));
