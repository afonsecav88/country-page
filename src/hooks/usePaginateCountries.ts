import { useEffect, useState } from 'react';
import { CountriesInfo } from '../interfaces/CountriesInfo.interface';

export const usePaginateCountries = (countries: CountriesInfo[]) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [lastPage, setLastPage] = useState<number>(1);
  const [paginatedCountries, setPaginatedCountries] = useState<CountriesInfo[]>(
    []
  );

  const paginatedAllCountries = () => {
    const startIndex = (currentPage - 1) * 10;
    const endIndex = startIndex + 10;
    const paginatedCountries = countries.slice(startIndex, endIndex);
    setPaginatedCountries(paginatedCountries);
    const calculateLastPage = Math.ceil(countries.length / 10);
    setLastPage(calculateLastPage);
  };

  useEffect(() => {
    paginatedAllCountries();
  }, [countries, currentPage]);

  return { paginatedCountries, setCurrentPage, currentPage, lastPage };
};
