import { api } from "./config.api";
import type { CountryComplete } from "$lib/types";
import { formatContryComplete } from "$lib/helpers";

const getAllCountriesFields =
  "flags,name,population,region,capital,cca3,nativeName,subregion,tld,currencies,languages,borders";
export const getAllCountries = async () => {
  try {
    let countries: CountryComplete[] = [];
    let codeForNameRecord: Record<string, string> = {};
    const res = await api.get(`all?fields=${getAllCountriesFields}`);
    const data = Array.from(res.data);
    for (let i = 0; i < data.length; i++) {
      const country = data[i] as any;
      codeForNameRecord[country.cca3] = country.name.common;
    }
    for (let i = 0; i < data.length; i++) {
      const country = data[i] as any;
      let countryComplete: CountryComplete = formatContryComplete(country);
      if (country.borders.length !== 0) {
        for (let j = 0; j < country.borders.length; j++) {
          const code = country.borders[j];
          countryComplete.borders.push({ code, name: codeForNameRecord[code] });
        }
      }
      countries.push(countryComplete);
    }
    return countries;
  } catch (_) {
    throw new Error("Sorry! We could not fetch all countries from the API.");
  }
};
