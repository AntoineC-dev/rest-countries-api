export type ThemeMode = "light" | "dark";

export interface ThemeStore {
  mode: ThemeMode;
  prefersColorScheme: boolean;
}
export type LocalStorageKey = "theme";

export interface CountrySimple {
  flag: string; // data.flags.png
  name: string; // data.name.official
  population: string; // data.population
  region: string; // data.region
  capital: string; // data.capital[0]
  code: string; // data.cca3
}

export interface CountryBorder {
  code: string; // data.cca3
  name: string; // data.name.common
}

export interface CountryComplete extends CountrySimple {
  nativeNames: string; // data.name.Object.values(nativeName).common --  format
  subregion: string; // data.subregion
  tld: string; // data.tld[0]
  currencies: string; // data.Object.values(currencies).name -- format
  languages: string; // data.Object.values(languages) -- format
  borders: CountryBorder[];
}

export interface CountriesStore {
  countries: CountryComplete[];
  loading: boolean;
  error: string | null;
}

export interface CountryFilter {
  name: string;
  region: string;
}
