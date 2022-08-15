import type { CountryComplete } from "$lib/types";

export const filterCountries = (
  countries: CountryComplete[],
  { name, region }: { name: string; region: string }
): CountryComplete[] => {
  if (!!name && !!region)
    return countries.filter(
      (country) =>
        country.region.toLowerCase() === region.toLowerCase() && country.name.toLowerCase().includes(name.toLowerCase())
    );
  if (!!name) return countries.filter((country) => country.name.toLowerCase().includes(name.toLowerCase()));
  if (!!region) return countries.filter((country) => country.region.toLowerCase() === region.toLowerCase());
  return countries;
};

export const filterByCode = (code: string, countries: CountryComplete[]) => {
  let country: any = {};
  for (let i = 0; i < countries.length; i++) {
    const curr = countries[i];
    if (curr.code !== code) continue;
    country = curr;
    break;
  }
  return country as CountryComplete;
};
