import { use, useEffect } from 'react';

import { CountryService } from '../services/country.service';
import { CountryContext } from '../context/CountryContext';

export const useGetCountries = () => {
  const { setCountries, setIsLoadingCountries } = use(CountryContext);
  const getAllCountries = async () => {
    try {
      setIsLoadingCountries(true);
      const countries = await CountryService.getCountiesInfo();
      setCountries(countries || []);
      setIsLoadingCountries(false);
      return countries || [];
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllCountries();
  }, []);

  return { getAllCountries };
};
