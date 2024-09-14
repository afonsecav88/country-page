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
      className="flex flex-col bg-[#1C1D1F] text-[#D2D5DA] min-w-[80vw] max-w-[1280px] absolute top-48 rounded-lg
     border-[#282B30] border pb-8">
      <article className="flex justify-between p-6 max-h-16 items-center">
        <div className="text-left">
          <CountriesCount numberOfCountries={countries.length} />
        </div>
        <div className="text-right">
          <SearchByFilter />
        </div>
      </article>
      <article className="flex flex-col sm:flex-row">
        <div className="min-w-full sm:min-w-72 p-6 ">
          <SortByfilter />
          <RegionTags />
          <StatusFilter />
        </div>
        <div className="p-6">
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
