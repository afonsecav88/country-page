import { Dispatch, SetStateAction, useState } from 'react';
import {
  CountriesInfo,
  SortByFilterType,
} from '../interfaces/CountriesInfo.interface';
import { useSortByCountries } from '../hooks/useSortByCountries';

type SortByFilterProps = {
  setCountries: Dispatch<SetStateAction<CountriesInfo[]>>;
  countries: CountriesInfo[];
};

export const SortByFilter = ({
  setCountries,
  countries,
}: SortByFilterProps) => {
  const { sortByCountries } = useSortByCountries();
  const [, setFilterBy] = useState<SortByFilterType>('population');

  const handleSelectFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedFilter = e.target.value as SortByFilterType;
    setFilterBy(selectedFilter);
    const sortedCountries = sortByCountries(countries, selectedFilter);
    setCountries(sortedCountries);
  };

  return (
    <div className="pb-2">
      <p className="text-xs text-[#6C727F] font-bold pb-2 ">Sort by</p>
      <select
        onChange={handleSelectFilter}
        name="select"
        className="w-full lg:w-64 bg-[#1C1D1F] border-[#282B30] border-2 focus:outline-none p-2 rounded-md mb-6 text-sm cursor-pointer">
        <option value="population" defaultValue={'Population'}>
          Population
        </option>
        <option value="name">Name</option>
        <option value="area">Área</option>
      </select>
    </div>
  );
};
