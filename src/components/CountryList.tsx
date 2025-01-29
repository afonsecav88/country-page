import { use } from 'react';
import { PaginateButtons } from './PaginateButtons';

import { CountriesTable } from './CountriesTable';
import { CountryContext } from '../context/CountryContext';

export const CountryList = () => {
  const { currentPage, lastPage, paginatedCountries, setCurrentPage } =
    use(CountryContext);

  return (
    <div>
      <CountriesTable paginatedCountries={paginatedCountries} />
      <PaginateButtons
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        lastPage={lastPage}
      />
    </div>
  );
};
