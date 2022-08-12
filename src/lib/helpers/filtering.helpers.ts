import type { CountrySimple } from "$lib/types";

export const filterCountries = (
  countries: CountrySimple[],
  { name, region }: { name: string; region: string }
): CountrySimple[] => {
  if (!!name && !!region)
    return countries.filter(
      (country) =>
        country.region.toLowerCase() === region.toLowerCase() && country.name.toLowerCase().includes(name.toLowerCase())
    );
  if (!!name) return countries.filter((country) => country.name.toLowerCase().includes(name.toLowerCase()));
  if (!!region) return countries.filter((country) => country.region.toLowerCase() === region.toLowerCase());
  return countries;
};
