import { CountriesInfo } from '../interfaces/CountriesInfo.interface';
import { useEffect } from 'react';
import { useGetCountries } from './useGetCountries';

export const useSearchBy = (countries: CountriesInfo[], searchTerm: string) => {
  const { getAllCountries } = useGetCountries();

  const searchByTerm = () => {
    const filterCountries = [...countries].filter(
      (country) =>
        country.name.common
          .toLowerCase()
          .includes(searchTerm.toLowerCase().trim()) ||
        country.region
          .toLowerCase()
          .includes(searchTerm.toLowerCase().trim()) ||
        country.subregion
          .toLowerCase()
          .includes(searchTerm.toLowerCase().trim())
    );

    console.log('filterCountries', filterCountries);
    return filterCountries.length !== 0
      ? filterCountries
      : getAllCountries().then();
  };

  useEffect(() => {
    searchByTerm();
  }, [searchTerm]);

  return { searchByTerm };
};
