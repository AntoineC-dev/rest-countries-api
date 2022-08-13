import type { RequestHandler } from "@sveltejs/kit";
import type { CountrySimple } from "$lib/types";
import { getAllCountries } from "$lib/api";

let cacheData: CountrySimple[] = [];

export const GET: RequestHandler<{}, { countries: CountrySimple[] }> = async () => {
  let countries: CountrySimple[] = [];
  if (cacheData.length === 0) {
    countries = await getAllCountries();
    cacheData = [...countries];
  } else {
    countries = cacheData;
  }
  return { body: { countries } };
};
