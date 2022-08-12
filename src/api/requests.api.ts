import { api } from "./config.api";
import type { CountrySimple } from "../types";

export const getAllCountries = async () => {
  let nf = new Intl.NumberFormat("en-US");
  try {
    let countries: CountrySimple[] = [];
    const response = await api.get("all?fields=flags,name,population,region,capital");
    const data = [...response.data];
    for (let i = 0; i < data.length; i++) {
      const { capital, flags, name, population, region } = data[i];
      countries.push({
        capital: capital[0],
        flag: flags.png,
        name: name.official,
        population: nf.format(population), // Format from 123456789 to 123,456,789
        region,
      });
    }
    return countries;
  } catch (error) {
    throw new Error("Sorry! We could not access the API.");
  }
};
