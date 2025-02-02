import { FC } from 'react';
import { useSearchByFilter } from '../hooks/useSearchByFilter';

export const SearchByFilter: FC = () => {
  const { searchTerm, handleOnChangeSearchTerm } = useSearchByFilter();

  return (
    <input
      type="text"
      name="searchTerm"
      value={searchTerm}
      onChange={handleOnChangeSearchTerm}
      id="searchBy"
      placeholder="Search by Name, Region, Subregion"
      className="flex bg-[url('/src/assets/Search.svg')] bg-[#282B30] bg-no-repeat bg-[10px_center] ] text-[#D2D5DA] mb-4 sm:m-0 pl-12 sm:mr-2 w-full md:w-72 h-9 text-xs font-semibold rounded-lg shadow-sm focus:outline-0 focus:border-sky-500"
    />
  );
};
