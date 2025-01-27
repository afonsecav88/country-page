import { createContext } from 'react';
import { CountriesInfo } from '../interfaces/CountriesInfo.interface';

export const CountryContext = createContext<CountriesInfo[]>([]);
