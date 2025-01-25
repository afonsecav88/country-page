import { CountriesCount } from './CountriesCount';
import { RegionTags } from './RegionTags';
import { SearchByFilter } from './SearchByFilter';
import { StatusFilter } from './StatusFilter';
import { CountryList } from './CountryList';
import { SortByFilter } from './SortByFilter';
import { usePaginateCountries } from '../hooks/usePaginateCountries';
import { useGetCountries } from '../hooks/useGetCountries';

export const ContainerCard = () => {
  const { countries } = useGetCountries();
  const { paginatedCountries, currentPage, setCurrentPage } =
    usePaginateCountries(countries);
  return (
    <section
      className="grid grid-flow-col grid-rows-[4vw_minmax(20rem,auto)] p-2 sm:pt-6 bg-[#1C1D1F] text-[#D2D5DA] w-[95vw] md:w-[80vw]  lg:w-[90vw] max-w-[1280px] absolute top-48 rounded-lg
     border-[#282B30] border pb-8">
      <article className="inline-grid grid-flow-col justify-between px-8">
        <CountriesCount numberOfCountries={countries.length} />
        <SearchByFilter />
      </article>

      <article className="inline-grid grid-flow-col justify-between px-8 ">
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
