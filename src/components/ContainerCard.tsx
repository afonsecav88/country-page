import { CountriesCount } from './CountriesCount';
import { RegionTags } from './RegionTags';
import { SearchByFilter } from './SearchByFilter';
import { StatusFilter } from './StatusFilter';
import { CountryList } from './CountryList';
import { SortByfilter } from './SortByFilter';
import { usePaginateCountries } from '../hooks/usePaginateCountries';
import { useGetCountries } from '../hooks/useGetCountries';

export const ContainerCard = () => {
  const { countries } = useGetCountries();
  const { paginatedCountries, currentPage, setCurrentPage } =
    usePaginateCountries(countries);
  return (
    <section
      className="grid grid-flow-row justify-center p-6 bg-[#1C1D1F] text-[#D2D5DA] w-[95vw] md:w-[80vw]  lg:w-[90vw] max-w-[1280px] absolute top-48 rounded-lg
     border-[#282B30] border pb-8">
      <article className="inline-flex flex-col p-0 sm:px-20 sm:pb-6 sm:flex-row  justify-between  max-h-16 sm:items-center">
        <div className="flex text-left mb-2 sm:mb-0">
          <CountriesCount numberOfCountries={countries.length} />
        </div>
        <div className="flex text-left sm:text-right">
          <SearchByFilter />
        </div>
      </article>
      <article className="flex flex-col p-0 sm:px-20 md:align-middle  lg:flex-row w-[90vw] md:w-[80vw]">
        <div className="flex flex-col w-full sm:w-full lg:w-[50vw] pt-6">
          <SortByfilter />
          <RegionTags />
          <StatusFilter />
        </div>
        <div className="pr-8 pl-0 sm:p-6 ">
          <CountryList
            countries={paginatedCountries}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </article>
    </section>
  );
};
