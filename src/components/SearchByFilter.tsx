import { ChangeEvent, Dispatch, SetStateAction, useState } from 'react';
import { useSearchBy } from '../hooks/useSearchBy';
import { CountriesInfo } from '../interfaces/CountriesInfo.interface';

type SearchByFilterProps = {
  setCountries: Dispatch<SetStateAction<CountriesInfo[]>>;
  countries: CountriesInfo[];
};

export const SearchByFilter = ({
  setCountries,
  countries,
}: SearchByFilterProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const { searchByTerm } = useSearchBy(countries, searchTerm);
  const handleOnchangeSearchTerm = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    const countriesFilters = searchByTerm();
    setCountries(countriesFilters);
    console.log(e.target.value);
  };

  return (
    <input
      type="text"
      name="searchTerm"
      value={searchTerm}
      onChange={handleOnchangeSearchTerm}
      id="searchBy"
      placeholder="Search by Name, Region, Subregion"
      className="flex bg-[url('/src/assets/Search.svg')] bg-no-repeat bg-[10px_center] bg-[rgb(40,43,48)] text-[#D2D5DA] mb-4 sm:m-0 pl-12 sm:mr-2 w-full  md:w-72 h-9 text-xs rounded-lg shadow-sm focus:outline-0 focus:border-sky-500"
    />
  );
};
