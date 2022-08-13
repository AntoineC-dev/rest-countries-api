import type { RequestHandler } from "@sveltejs/kit";
import type { CountryComplete } from "$lib/types";
import { getCountryByName } from "$lib/api";

export const GET: RequestHandler<{ name: string }, { country: CountryComplete }> = async ({ params }) => {
  const country = await getCountryByName(params.name);
  return { body: { country } };
};
