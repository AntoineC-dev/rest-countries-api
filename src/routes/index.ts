import type { RequestHandler } from "@sveltejs/kit";
import type { CountrySimple } from "$lib/types";
import { getAllCountries } from "$lib/api";

export const GET: RequestHandler<{}, { countries: CountrySimple[] }> = async () => {
  const countries = await getAllCountries();
  return { body: { countries } };
};
