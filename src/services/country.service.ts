import type { CountriesInfo } from '../interfaces/CountriesInfo.interface';

const apiCountriesURL = import.meta.env.VITE_BACKEND_URL;

export class CountryService {
  public static readonly getCountiesInfo = async (): Promise<
    CountriesInfo[] | undefined
  > => {
    const urlApiCountries = `${apiCountriesURL}/all?fields=name,flags,population,area,region,languages,currencies,borders,subregion,continents,unMember,capital`;

    try {
      const data = await fetch(urlApiCountries);
      const resp: CountriesInfo[] = await data.json();
      const orderCountriesByPopulation = [...resp].sort(
        (a, b) => b.population - a.population
      );
      return orderCountriesByPopulation || [];
    } catch (error) {
      console.log('Ha ocurrido un error', error);
    }
  };
}
