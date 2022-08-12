export type ThemeMode = "light" | "dark";

export interface ThemeStore {
  mode: ThemeMode;
  prefersColorScheme: boolean;
}
export type LocalStorageKey = "theme";

export interface CountrySimple {
  flag: string; // data.flags.png
  name: string; // data.name.official
  population: number; // data.population
  region: string; // data.region
  capital: string; // data.capital[0]
}

export interface CountryComplete extends CountrySimple {
  nativeNames: string; // data.name.Object.values(nativeName).common --  format
  subregion: string; // data.subregion
  tld: string; // data.tld[0]
  currencies: string; // data.Object.values(currencies).name -- format
  languages: string; // data.Object.values(languages) -- format
  borderCountries: string[]; // data.borders.foreach((_) => getName)
}
