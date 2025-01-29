import { useEffect, useState } from 'react';
import { CountriesInfo } from '../interfaces/CountriesInfo.interface';
import { CountryService } from '../services/country.service';

export const useGetCountries = () => {
  const [countries, setCountries] = useState<CountriesInfo[]>([]);
  const [isLoadingCountries, setIsLoadingCountries] = useState(false);

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

  return { countries, setCountries, getAllCountries, isLoadingCountries };
};
