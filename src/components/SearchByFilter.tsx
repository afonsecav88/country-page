import { FC, use, useEffect, useState } from 'react';
import { CountryContext } from '../context/countryContext';
import { useGetCountries } from '../hooks/useGetCountries';
import { CountriesInfo } from '../interfaces/CountriesInfo.interface';

export const SearchByFilter: FC = () => {
  const { setCountries } = use(CountryContext);
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
      className="flex bg-[url('/src/assets/Search.svg')] bg-no-repeat bg-[10px_center] bg-[rgb(40,43,48)] text-[#D2D5DA] mb-4 sm:m-0 pl-12 sm:mr-2 w-full md:w-72 h-9 text-xs rounded-lg shadow-sm focus:outline-0 focus:border-sky-500"
    />
  );
};
