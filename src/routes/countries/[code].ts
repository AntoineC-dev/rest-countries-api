import type { RequestHandler } from "@sveltejs/kit";
import type { CountryComplete } from "$lib/types";
import { getCountryByCode } from "$lib/api";

export const GET: RequestHandler<{ code: string }, { country: CountryComplete }> = async ({ params }) => {
  console.log(params);
  const country = await getCountryByCode(params.code);
  return { body: { country } };
};
