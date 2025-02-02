import { Navigate, useParams } from 'react-router-dom';
import { useFormattedCountryName } from '../hooks/useFormattedName';
import { FC, use } from 'react';
import { CountryContext } from '../context/CountryContext';
import { CountryDetails } from '../components/CountryDetails';
import { LoadingCountryDetail } from '../components/LoadingCountryDetail';

export const CountryDetailsPage: FC = () => {
  const { countries } = use(CountryContext);
  const { name } = useParams();
  const { formattedCountryName } = useFormattedCountryName();

  if (!countries.length) return <LoadingCountryDetail />;

  const hasExistCountry = countries.find(
    (country) =>
      formattedCountryName(country.name.common.toLowerCase()) === name
  );

  if (!hasExistCountry) return <Navigate to="/countries" replace />;

  return <CountryDetails country={hasExistCountry} />;
};
