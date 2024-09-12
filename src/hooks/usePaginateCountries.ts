import { CountriesInfo } from '../interfaces/ContriesInfo.interface';

export const usePaginateCountries = (countries: CountriesInfo[]) => {
  const currentPage = 1;
  const startIndex = (currentPage - 1) * 10;
  const endIndex = startIndex + 10;
  const paginatedCountries = countries.slice(startIndex, endIndex);
  return paginatedCountries;
};
