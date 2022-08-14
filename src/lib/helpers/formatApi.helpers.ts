import type { CountryBorder, CountryComplete, CountrySimple } from "$lib/types";

export const formatCountrySimple = (data: any): CountrySimple => {
  let nf = new Intl.NumberFormat("en-US");
  return {
    capital: data.capital[0],
    flag: data.flags.svg,
    name: data.name.common,
    population: nf.format(data.population), // Format from 123456789 to 123,456,789
    region: data.region,
    code: data.cca3,
  };
};

export const formatContryComplete = (data: any): CountryComplete => {
  const countrySimple = formatCountrySimple(data);
  let props: CountryComplete = {
    ...countrySimple,
    subregion: data.subregion,
    tld: data.tld[0],
    languages: "",
    currencies: "",
    nativeNames: "",
    borders: [],
  };
  Object.values(data.name.nativeName).forEach((nativeName) => {
    props.nativeNames = props.nativeNames.concat((nativeName as any).common, " ");
  });
  props.nativeNames = props.nativeNames.trim().replaceAll(" ", ", ");
  Object.values(data.currencies).forEach((currency) => {
    props.currencies = props.currencies.concat((currency as any).name, " ");
  });
  props.currencies = props.currencies.trim().replaceAll(" ", ", ");
  Object.values(data.languages).forEach((language) => {
    props.languages = props.languages.concat(language as string, " ");
  });
  props.languages = props.languages.trim().replaceAll(" ", ", ");
  return props;
};

export const formatBorders = (data: any): CountryBorder[] => {
  let borders: CountryBorder[] = [];
  for (let i = 0; i < data.length; i++) {
    const borderData = data[i];
    borders.push({ code: borderData.cca3, name: borderData.name.common });
  }
  return borders;
};
