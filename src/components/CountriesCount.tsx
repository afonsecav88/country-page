import { FC, use } from 'react';
import { CountryContext } from '../context/CountryContext';

export const CountriesCount: FC = () => {
  const { countries } = use(CountryContext);
  return (
    <p className="text-[#D2D5DA] text-base font-semibold">
      Found {countries.length} countries
    </p>
  );
};
