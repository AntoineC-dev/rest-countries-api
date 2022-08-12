import { api } from "./config.api";
import type { CountrySimple } from "$lib/types";
import { formatContryComplete, formatCountrySimple } from "$lib/helpers";

const fieldsSimple = "flags,name,population,region,capital";
export const getAllCountries = async () => {
  try {
    let countries: CountrySimple[] = [];
    const response = await api.get(`all?fields=${fieldsSimple}`);
    const data = [...response.data];
    for (let i = 0; i < data.length; i++) {
      const country = formatCountrySimple(data[i]);
      countries.push(country);
    }
    return countries;
  } catch (_) {
    throw new Error("Sorry! We could not access the API.");
  }
};
const fieldsComplete = `${fieldsSimple},nativeName,subregion,tld,currencies,languages,borders`;
export const getCountryByName = async (param: string) => {
  try {
    const response = await api.get(`name/${param}?fields=${fieldsComplete}`);
    const data = response.data[0];
    const countryComplete = await formatContryComplete(data, api);
    return countryComplete;
  } catch (_) {
    throw new Error("Sorry! We could not access the API.");
  }
};
