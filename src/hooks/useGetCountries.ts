import { useEffect, useState } from 'react';
import { CountriesInfo } from '../interfaces/CountriesInfo.interface';
import { CountryService } from '../services/country.service';

export const useGetCountries = () => {
  const [countries, setCountries] = useState<CountriesInfo[]>([]);

  const getAllCountries = async () => {
    try {
      const countries = await CountryService.getCountiesInfo();
      setCountries(countries || []);
      return countries || [];
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllCountries();
  }, []);

  return { countries, setCountries, getAllCountries };
};
