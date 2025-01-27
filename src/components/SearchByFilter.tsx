import { FC } from 'react';

export const SearchByFilter: FC = () => {
  return (
    <input
      type="text"
      name="searchTerm"
      value=""
      onChange={() => {}}
      id="searchBy"
      placeholder="Search by Name, Region, Subregion"
      className="flex bg-[url('/src/assets/Search.svg')] bg-no-repeat bg-[10px_center] bg-[rgb(40,43,48)] text-[#D2D5DA] mb-4 sm:m-0 pl-12 sm:mr-2 w-full  md:w-72 h-9 text-xs rounded-lg shadow-sm focus:outline-0 focus:border-sky-500"
    />
  );
};
