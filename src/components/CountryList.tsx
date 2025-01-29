import { use } from 'react';
import { PaginateButtons } from './PaginateButtons';
import { CountryContext } from '../context/countryContext';

import { CountriesTable } from './CountriesTable';

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
