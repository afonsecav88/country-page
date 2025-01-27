import { JSX } from 'react';
import { CountryContext } from './countryContext';

type CountryProviderChildren = {
  children: JSX.Element | JSX.Element[];
};

export const CountryProvider = ({ children }: CountryProviderChildren) => {
  return <CountryContext value={[]}>{children}</CountryContext>;
};
