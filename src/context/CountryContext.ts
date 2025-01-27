import { createContext, Dispatch } from 'react';
import { CountriesInfo } from '../interfaces/CountriesInfo.interface';

export interface CountriesState {
  paginatedCountries: CountriesInfo[];
  currentPage: number;
  lastPage: number;
  setCurrentPage: Dispatch<React.SetStateAction<number>>;
}

export const CountryContext = createContext<CountriesState>(
  {} as CountriesState
);
