import { FC, use } from 'react';
import { SortByFilterType } from '../interfaces/CountriesInfo.interface';
import { useSortByCountries } from '../hooks/useSortByCountries';
import { CountryContext } from '../context/CountryContext';

export const SortByFilter: FC = () => {
  const { countries, setCountries, setCurrentPage } = use(CountryContext);
  const { sortByCountries } = useSortByCountries();

  const handleSelectFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedFilter = e.target.value as SortByFilterType;
    const sortedCountries = sortByCountries(countries, selectedFilter);
    setCountries(sortedCountries);
    setCurrentPage(1);
  };

  return (
    <div className="pb-2">
      <p className="text-xs font-semibold text-[#D2D5DA]  pb-2 ">Sort by</p>
      <select
        onChange={handleSelectFilter}
        name="select"
        className="w-full lg:w-64 bg-[#1C1D1F] border-[#282B30] border-2 focus:outline-none p-2 rounded-md mb-6 text-sm font-bold cursor-pointer">
        <option value="population" defaultValue={'Population'}>
          Population
        </option>
        <option value="name">Name</option>
        <option value="area">Área</option>
      </select>
    </div>
  );
};
