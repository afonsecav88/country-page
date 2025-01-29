import { createContext, Dispatch } from 'react';
import { CountriesInfo } from '../interfaces/CountriesInfo.interface';

export interface CountriesState {
  paginatedCountries: CountriesInfo[];
  countries: CountriesInfo[];
  currentPage: number;
  lastPage: number;
  isLoadingCountries: boolean;
  setCurrentPage: Dispatch<React.SetStateAction<number>>;
  setCountries: React.Dispatch<React.SetStateAction<CountriesInfo[]>>;
}

export const CountryContext = createContext<CountriesState>(
  {} as CountriesState
);
