import { use } from 'react';
import { CountryContext } from '../context/countryContext';

export const CountriesCount = () => {
  const { paginatedCountries } = use(CountryContext);
  return (
    <p className="text-[#6C727F] text-sm font-semibold">
      Found {paginatedCountries.length} countries
    </p>
  );
};
