import { CountriesInfo } from '../interfaces/ContriesInfo.interface';

export class CountryService {
  static getCountiesInfo = async (): Promise<CountriesInfo[] | undefined> => {
    const urlApiCountries = `https://restcountries.com/v3.1/all?fields=name,flags,population,area,region,languages,currencies,borders,subregion,continents`;

    try {
      const data = await fetch(urlApiCountries);
      const resp = await data.json();
      return resp;
    } catch (error) {
      console.log('Ha ocurrido un error', error);
    }
  };
}
