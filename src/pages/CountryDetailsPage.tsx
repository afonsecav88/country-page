import { Navigate, useParams } from 'react-router-dom';
import { useFormattedCountryName } from '../hooks/useFormattedName';
import { use } from 'react';
import { CountryContext } from '../context/CountryContext';
import { CountryDetails } from '../components/CountryDetails';

export const CountryDetailsPage = () => {
  const { countries } = use(CountryContext);
  const { name } = useParams();
  const { formattedCountryName } = useFormattedCountryName();

  const hasExistCountry = countries.find(
    (country) =>
      formattedCountryName(country.name.common.toLowerCase()) === name
  );

  if (!hasExistCountry) return <Navigate to="/countries" replace />;

  return <CountryDetails hasExistCountry={hasExistCountry} />;
};
