import { JSX } from 'react';
import { CountryContext } from './countryContext';
import { useGetCountries } from '../hooks/useGetCountries';
import { usePaginateCountries } from '../hooks/usePaginateCountries';

type CountryProviderChildren = {
  children: JSX.Element | JSX.Element[];
};

export const CountryProvider = ({ children }: CountryProviderChildren) => {
  const { countries } = useGetCountries();
  const { paginatedCountries, currentPage, lastPage, setCurrentPage } =
    usePaginateCountries(countries);

  const initialState = {
    paginatedCountries,
    currentPage,
    lastPage,
    setCurrentPage,
  };

  return <CountryContext value={initialState}>{children}</CountryContext>;
};
