import { use, useEffect, useState } from 'react';

import { CountryContext } from '../context/CountryContext';
import { CountriesInfo } from '../interfaces/CountriesInfo.interface';
import { useGetCountries } from './useGetCountries';

export const useSearchByFilter = () => {
  const { getAllCountries } = useGetCountries();
  const { setCountries, setCurrentPage } = use(CountryContext);
  const [searchTerm, setSearchTerm] = useState('');
  const [originalCountries, setOriginalCountries] = useState<CountriesInfo[]>(
    []
  );

  useEffect(() => {
    getAllCountries().then((countries) =>
      setOriginalCountries(countries || [])
    );
  }, []);

  const filterCountriesBySearchTerm = (term: string) => {
    if (!term.length) {
      setCountries(originalCountries);
      return;
    }

    const filtered = originalCountries.filter(
      (country) =>
        country.name.common.toLowerCase().includes(term.toLowerCase().trim()) ||
        country.region.toLowerCase().includes(term.toLowerCase().trim()) ||
        country.subregion.toLowerCase().includes(term.toLowerCase().trim())
    );
    setCountries(filtered);
    setCurrentPage(1);
  };

  const handleOnChangeSearchTerm = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
    setSearchTerm(term);
    filterCountriesBySearchTerm(term);
  };
  return { searchTerm, handleOnChangeSearchTerm };
};
