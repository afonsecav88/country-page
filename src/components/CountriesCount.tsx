import { FC, use } from 'react';
import { CountryContext } from '../context/countryContext';

export const CountriesCount: FC = () => {
  const { countries } = use(CountryContext);
  return (
    <p className="text-[#6C727F] text-sm font-semibold">
      Found {countries.length} countries
    </p>
  );
};
