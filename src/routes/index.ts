/** @type {import('@sveltejs/kit').RequestHandler} */
import { getAllCountries } from "../api/requests.api";

export const GET = async () => {
  const countries = await getAllCountries();
  return { body: { countries } };
};
