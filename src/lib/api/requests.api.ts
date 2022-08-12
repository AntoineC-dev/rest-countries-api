import { api } from "./config.api";
import type { CountryComplete, CountrySimple } from "$lib/types";

const fieldsSimple = "flags,name,population,region,capital";
export const getAllCountries = async () => {
  let nf = new Intl.NumberFormat("en-US");
  try {
    let countries: CountrySimple[] = [];
    const response = await api.get(`all?fields=${fieldsSimple}`);
    const data = [...response.data];
    for (let i = 0; i < data.length; i++) {
      const { capital, flags, name, population, region } = data[i];
      countries.push({
        capital: capital[0],
        flag: flags.png,
        name: name.common,
        population: nf.format(population), // Format from 123456789 to 123,456,789
        region,
      });
    }
    return countries;
  } catch (_) {
    throw new Error("Sorry! We could not access the API.");
  }
};
const fieldsComplete = `${fieldsSimple},nativeName,subregion,tld,currencies,languages,borders`;
export const getCountryByName = async (param: string) => {
  let nf = new Intl.NumberFormat("en-US");
  try {
    const response = await api.get(`name/${param}?fields=${fieldsComplete}`);
    const { capital, flags, name, population, region, subregion, tld, ...rest } = response.data[0];
    let country: CountryComplete = {
      capital: capital[0],
      flag: flags.png,
      name: name.common,
      population: nf.format(population), // Format from 123456789 to 123,456,789
      region,
      subregion,
      tld: tld[0],
      languages: "",
      currencies: "",
      nativeNames: "",
      borderCountries: [],
    };
    Object.values(name.nativeName).forEach((nativeName) => {
      country.nativeNames = country.nativeNames.concat((nativeName as any).common, " ");
    });
    country.nativeNames = country.nativeNames.trim().replaceAll(" ", ", ");
    Object.values(rest.currencies).forEach((currency) => {
      country.currencies = country.currencies.concat((currency as any).name, " ");
    });
    country.currencies = country.currencies.trim().replaceAll(" ", ", ");
    Object.values(rest.languages).forEach((language) => {
      country.languages = country.languages.concat(language as string, " ");
    });
    country.languages = country.languages.trim().replaceAll(" ", ", ");
    for (let i = 0; i < rest.borders.length; i++) {
      const border = rest.borders[i];
      const {
        data: { name },
      } = await api.get(`alpha/${border}?fields=name`);
      country.borderCountries.push(name.common);
    }
    return country;
  } catch (_) {
    throw new Error("Sorry! We could not access the API.");
  }
};
