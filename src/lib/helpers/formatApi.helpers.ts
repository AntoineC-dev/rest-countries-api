import type { AxiosInstance } from "axios";
import type { CountryComplete, CountrySimple } from "$lib/types";

export const formatCountrySimple = (data: any): CountrySimple => {
  let nf = new Intl.NumberFormat("en-US");
  return {
    capital: data.capital[0],
    flag: data.flags.png,
    name: data.name.common,
    population: nf.format(data.population), // Format from 123456789 to 123,456,789
    region: data.region,
  };
};

export const formatContryComplete = async (data: any, apiInstance: AxiosInstance): Promise<CountryComplete> => {
  const countrySimple = formatCountrySimple(data);
  let props: CountryComplete = {
    ...countrySimple,
    subregion: data.subregion,
    tld: data.tld[0],
    languages: "",
    currencies: "",
    nativeNames: "",
    borderCountries: [],
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
  for (let i = 0; i < data.borders.length; i++) {
    const border = data.borders[i];
    const {
      data: { name },
    } = await apiInstance.get(`alpha/${border}?fields=name`);
    props.borderCountries.push(name.common);
  }
  return props;
};
