import { useState } from 'react';
import { CountriesInfo } from '../interfaces/CountriesInfo.interface';
import { CountryService } from '../services/country.service';

export const useGetNeightbouringCountries = () => {
  const [neightbouringCountries, setNeightbouringCountries] = useState<
    Partial<CountriesInfo[]>
  >([]);
  // const [isLoadingCountries, setIsLoadingCountries] = useState(false);

  const getNeightbouringCountries = async (borderCodes: string[]) => {
    try {
      // setIsLoadingCountries(true);
      const countries = await CountryService.getCountriesByAlphaCode(
        borderCodes
      );
      setNeightbouringCountries(countries || []);
      // setIsLoadingCountries(false);
      return countries || [];
    } catch (error) {
      console.log(error);
    }
  };

  return { getNeightbouringCountries, neightbouringCountries };
};
