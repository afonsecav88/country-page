import { useState } from 'react';
import { CountriesInfo } from '../interfaces/ContriesInfo.interface';

export const usePaginateCountries = (countries: CountriesInfo[]) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const startIndex = (currentPage - 1) * 10;
  const endIndex = startIndex + 10;
  const paginatedCountries = countries.slice(startIndex, endIndex);
  return { paginatedCountries, setCurrentPage, currentPage };
};
