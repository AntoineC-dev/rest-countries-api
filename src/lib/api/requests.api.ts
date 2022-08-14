import { api } from "./config.api";
import type { CountrySimple } from "$lib/types";
import { formatBorders, formatContryComplete, formatCountrySimple } from "$lib/helpers";

const fieldsSimple = "flags,name,population,region,capital,cca3";
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
export const getCountryByCode = async (param: string) => {
  try {
    const { data } = await api.get(`alpha/${param}?fields=${fieldsComplete}`);
    const countryComplete = await formatContryComplete(data);
    if (data.borders.length !== 0) {
      let codes = "";
      [...data.borders].forEach((border) => (codes = codes.concat(border, " ")));
      codes = codes.trim().replaceAll(" ", ",");
      const bordersRes = await api.get(`alpha?codes=${codes}`);
      countryComplete.borders = formatBorders(bordersRes.data);
    }
    return countryComplete;
  } catch (_) {
    throw new Error(`Sorry! We could not access the data for ${param} on the API.`);
  }
};
