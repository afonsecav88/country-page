import {
  CountriesInfo,
  SortByFilterType,
} from '../interfaces/CountriesInfo.interface';

export const useSortByCountries = () => {
  const sortByCountries = (
    countries: CountriesInfo[],
    sort: SortByFilterType
  ) => {
    return [...countries].sort((a, b) => {
      if (sort === 'population') return b.population - a.population;
      if (sort === 'area') return b.area - a.area;
      if (sort === 'name') return a.name.common.localeCompare(b.name.common);
      return 0;
    });
  };

  return { sortByCountries };
};
