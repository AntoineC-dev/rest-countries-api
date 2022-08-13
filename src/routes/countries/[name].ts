import type { RequestHandler } from "@sveltejs/kit";
import type { CountryComplete } from "$lib/types";
import { getCountryByName } from "$lib/api";

export const GET: RequestHandler<{ name: string }, { country: CountryComplete }> = async ({ params }) => {
  const unformattedName = params.name.replaceAll("_", " ");
  const country = await getCountryByName(unformattedName);
  return { body: { country } };
};
