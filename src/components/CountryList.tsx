import { PaginateButtons } from './PaginateButtons';

import { CountriesTable } from './CountriesTable';
import { use } from 'react';
import { CountryContext } from '../context/CountryContext';
import { Loading } from './Loading';

export const CountryList = () => {
  const { isLoadingCountries } = use(CountryContext);

  if (isLoadingCountries) return <Loading />;

  return (
    <div>
      <CountriesTable />
      <PaginateButtons />
    </div>
  );
};
