import type { CountriesInfo } from '../interfaces/ContriesInfo.interface';

export class CountryService {
  public static readonly getCountiesInfo = async (): Promise<
    CountriesInfo[] | undefined
  > => {
    const urlApiCountries = `https://restcountries.com/v3.1/all?fields=name,flags,population,area,region,languages,currencies,borders,subregion,continents`;

    try {
      const data = await fetch(urlApiCountries);
      const resp: CountriesInfo[] = await data.json();
      const orderCountries = [...resp].sort(
        (a, b) => b.population - a.population
      );
      return orderCountries;
    } catch (error) {
      console.log('Ha ocurrido un error', error);
    }
  };
}
