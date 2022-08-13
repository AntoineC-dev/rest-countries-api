import type { RequestHandler } from "@sveltejs/kit";
import type { CountryComplete } from "$lib/types";
import { getCountryByName } from "$lib/api";

let cacheKeys: string[] = [];
let cacheData: Record<string, CountryComplete> = {};

export const GET: RequestHandler<{ name: string }, { country: CountryComplete }> = async ({ params }) => {
  let country: CountryComplete;
  if (cacheKeys.includes(params.name)) {
    country = cacheData[params.name];
  } else {
    country = await getCountryByName(params.name);
    cacheKeys = [...cacheKeys, params.name];
    cacheData[params.name] = country;
  }
  return { body: { country } };
};
