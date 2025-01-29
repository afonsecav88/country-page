import { JSX } from 'react';

import { useGetCountries } from '../hooks/useGetCountries';
import { usePaginateCountries } from '../hooks/usePaginateCountries';
import { CountryContext } from './CountryContext';

type CountryProviderChildren = {
  children: JSX.Element | JSX.Element[];
};

export const CountryProvider = ({ children }: CountryProviderChildren) => {
  const { countries, setCountries, isLoadingCountries } = useGetCountries();
  const { paginatedCountries, currentPage, lastPage, setCurrentPage } =
    usePaginateCountries(countries);

  const initialState = {
    paginatedCountries,
    countries,
    currentPage,
    lastPage,
    isLoadingCountries,
    setCurrentPage,
    setCountries,
  };

  return <CountryContext value={initialState}>{children}</CountryContext>;
};
