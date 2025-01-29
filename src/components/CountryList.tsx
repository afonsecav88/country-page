import { PaginateButtons } from './PaginateButtons';

import { CountriesTable } from './CountriesTable';

export const CountryList = () => {
  return (
    <div>
      <CountriesTable />
      <PaginateButtons />
    </div>
  );
};
