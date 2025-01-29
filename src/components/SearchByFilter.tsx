import { FC, use, useEffect, useState } from 'react';
import { useGetCountries } from '../hooks/useGetCountries';
import { CountriesInfo } from '../interfaces/CountriesInfo.interface';
import { CountryContext } from '../context/CountryContext';

export const SearchByFilter: FC = () => {
  const { setCountries, setCurrentPage } = use(CountryContext);
  const [searchTerm, setSearchTerm] = useState('');
  const { getAllCountries } = useGetCountries();
  const [originalCountries, setOriginalCountries] = useState<CountriesInfo[]>(
    []
  );

  useEffect(() => {
    getAllCountries().then((fetchedCountries) => {
      setOriginalCountries(fetchedCountries || []);
      setCountries(fetchedCountries || []);
    });
  }, []);

  const filterCountriesBySearchTerm = (term: string) => {
    if (!term.length) {
      setCountries(originalCountries);
      return;
    }

    const filtered = originalCountries.filter(
      (country) =>
        country.name.common.toLowerCase().includes(term.toLowerCase().trim()) ||
        country.region.toLowerCase().includes(term.toLowerCase().trim()) ||
        country.subregion.toLowerCase().includes(term.toLowerCase().trim())
    );
    setCountries(filtered);
    setCurrentPage(1);
  };

  const handleOnChangeSearchTerm = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
    setSearchTerm(term);
    filterCountriesBySearchTerm(term);
  };

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
