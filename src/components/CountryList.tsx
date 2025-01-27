import { Suspense, use } from 'react';
import { PaginateButtons } from './PaginateButtons';
import { CountryContext } from '../context/countryContext';
import { Loading } from './Loading';
import { CountriesTable } from './CountriesTable';

export const CountryList = () => {
  const { currentPage, lastPage, paginatedCountries, setCurrentPage } =
    use(CountryContext);

  return (
    <Suspense fallback={<Loading />}>
      <div>
        <CountriesTable paginatedCountries={paginatedCountries} />
        <PaginateButtons
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          lastPage={lastPage}
        />
      </div>
    </Suspense>
  );
};
