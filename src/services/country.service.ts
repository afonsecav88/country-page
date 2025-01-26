import type { CountriesInfo } from '../interfaces/ContriesInfo.interface';

const apiCountriesURL = import.meta.env.VITE_BACKEND_URL;

export class CountryService {
  public static readonly getCountiesInfo = async (
    sort?: string
  ): Promise<CountriesInfo[] | undefined> => {
    const urlApiCountries = `${apiCountriesURL}/all?fields=name,flags,population,area,region,languages,currencies,borders,subregion,continents`;

    try {
      const data = await fetch(urlApiCountries);
      const resp: CountriesInfo[] = await data.json();
      if (!sort) {
        const orderCountriesByPopulation = [...resp].sort(
          (a, b) => b.population - a.population
        );
        return orderCountriesByPopulation;
      } else {
        const orderCountries = [...resp].sort((a, b) =>
          a[sort as keyof CountriesInfo] < b[sort as keyof CountriesInfo]
            ? 1
            : -1
        );
        return orderCountries;
      }
    } catch (error) {
      console.log('Ha ocurrido un error', error);
    }
  };
}
