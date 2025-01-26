import { CountriesInfo } from '../interfaces/CountriesInfo.interface';
import { useGetCountries } from './useGetCountries';

export const useStatusCountries = () => {
  const { getAllCountries } = useGetCountries();
  const sortByCountries = (
    countries: CountriesInfo[],
    checkMember?: boolean,
    checkIndependent?: boolean
  ) => {
    if (checkMember) {
      const countriesFilter = [...countries].filter(
        (member) => member.unMember === checkMember
      );
      console.log('countriesFilter', countriesFilter);
      return countriesFilter;
    } else {
      const orderCountriesByPopulation = getAllCountries();
      return countries;
    }
  };

  return { sortByCountries };
};
