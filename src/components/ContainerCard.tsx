import { CountriesCount } from './CountriesCount';
import { RegionTags } from './RegionTags';
import { SearchByFilter } from './SearchByFilter';
import { StatusFilter } from './StatusFilter';
import { CountryList } from './CountryList';
import { SortByFilter } from './SortByFilter';
import { usePaginateCountries } from '../hooks/usePaginateCountries';
import { useGetCountries } from '../hooks/useGetCountries';
import { useState } from 'react';

export const ContainerCard = () => {
  const [sortCountries, setSortCountries] = useState<string>('population');
  const { countries } = useGetCountries(sortCountries);
  const { paginatedCountries, currentPage, setCurrentPage } =
    usePaginateCountries(countries);

  return (
    <section
      className="grid grid-flow-col grid-rows-[20vw_minmax(20rem,auto)] md:grid-rows-[4vw_minmax(auto,auto)] gap-5 p-2 sm:pt-6 bg-[#1C1D1F] text-[#D2D5DA] w-[94vw] md:w-[96vw]  lg:w-[90vw] xl:w-[83vw] absolute top-48 rounded-lg
     border-[#282B30] border pb-8">
      <article className="inline-grid grid-flow-row grid-cols-1 md:grid-flow-col justify-between px-8 pt-4 gap-4">
        <CountriesCount numberOfCountries={countries.length} />
        <SearchByFilter />
      </article>

      <article className="inline-grid grid-flow-row lg:grid-flow-col justify-between px-8 ">
        <span>
          <SortByFilter />
          <RegionTags />
          <StatusFilter />
        </span>
        <CountryList
          countries={paginatedCountries}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </article>
    </section>
  );
};
