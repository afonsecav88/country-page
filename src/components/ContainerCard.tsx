import { CountriesCount } from './CountriesCount';
import { SearchByFilter } from './SearchByFilter';
import { StatusFilter } from './StatusFilter';
import { CountryList } from './CountryList';
import { SortByFilter } from './SortByFilter';
import { usePaginateCountries } from '../hooks/usePaginateCountries';
import { useGetCountries } from '../hooks/useGetCountries';
import { RegionTags } from './RegionTags';

export const ContainerCard = () => {
  const { countries, setCountries } = useGetCountries();
  const { paginatedCountries, currentPage, setCurrentPage, lastPage } =
    usePaginateCountries(countries);

  return (
    <section
      className="grid grid-flow-col grid-rows-[20vw_minmax(20rem,auto)] md:grid-rows-[4vw_minmax(auto,auto)] gap-5 p-2 sm:pt-6 bg-[#1C1D1F] text-[#D2D5DA]  w-[94vw] md:w-[96vw]  lg:w-[90vw] xl:w-[83vw] absolute top-48 rounded-lg
     border-[#282B30] border pb-8">
      <article className="inline-grid grid-flow-row grid-cols-1 md:grid-flow-col justify-between px-8 pt-2 gap-4">
        <CountriesCount numberOfCountries={countries.length} />
        <SearchByFilter setCountries={setCountries} countries={countries} />
      </article>

      <article className="inline-grid grid-flow-row lg:grid-flow-col justify-between px-8 ">
        <span>
          <SortByFilter setCountries={setCountries} countries={countries} />
          <RegionTags setCountries={setCountries} countries={countries} />
          <StatusFilter setCountries={setCountries} countries={countries} />
        </span>
        <CountryList
          countries={paginatedCountries}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          lastPage={lastPage}
        />
      </article>
    </section>
  );
};
