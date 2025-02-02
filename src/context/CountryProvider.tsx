import { JSX, useState } from 'react';

import { usePaginateCountries } from '../hooks/usePaginateCountries';
import { CountryContext } from './CountryContext';
import { CountriesInfo } from '../interfaces/CountriesInfo.interface';

type CountryProviderChildren = {
  children: JSX.Element | JSX.Element[];
};

export const CountryProvider = ({ children }: CountryProviderChildren) => {
  const [isLoadingCountries, setIsLoadingCountries] = useState(false);
  const [countries, setCountries] = useState<CountriesInfo[]>([]);
  const { paginatedCountries, currentPage, lastPage, setCurrentPage } =
    usePaginateCountries(countries);

  const initialState = {
    paginatedCountries,
    countries,
    currentPage,
    lastPage,
    isLoadingCountries: isLoadingCountries,
    setIsLoadingCountries,
    setCurrentPage,
    setCountries,
  };

  return <CountryContext value={initialState}>{children}</CountryContext>;
};
