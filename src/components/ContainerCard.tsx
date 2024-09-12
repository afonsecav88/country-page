import { CountriesCount } from './CountriesCount';
import { RegionTags } from './RegionTags';
import { SearchByFilter } from './SearchByFilter';
import { StatusFilter } from './StatusFilter';
import { CountryList } from './CountryList';
import { SortByfilter } from './SortByFilter';
import { CountryService } from '../services/country.service';
import { useEffect, useState } from 'react';
import { CountriesInfo } from '../interfaces/ContriesInfo.interface';

export const ContainerCard = () => {
  const [countries, setCountries] = useState<CountriesInfo[]>([]);

  const paginateCountries = (countries: CountriesInfo[]) => {
    const currentPage = 1;
    const startIndex = (currentPage - 1) * 10;
    const endIndex = startIndex + 10;
    const paginatedCountries = countries.slice(startIndex, endIndex);
    return paginatedCountries;
  };

  useEffect(() => {
    CountryService.getCountiesInfo()
      .then((resp) => {
        if (!resp) return;
        const paginatedCountries = paginateCountries(resp);
        setCountries(paginatedCountries);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <section
      className="flex flex-col bg-[#1C1D1F] text-[#D2D5DA] min-w-[90vw] max-w-[1280px] min-h-screen absolute top-48 rounded-lg
     border-[#282B30] border ">
      <article className="flex justify-between p-6 max-h-16 items-center">
        <div className="text-left">
          <CountriesCount />
        </div>
        <div className="text-right">
          <SearchByFilter />
        </div>
      </article>
      <article className="flex flex-col sm:flex-row ">
        <div className="min-w-full sm:min-w-72 p-6 ">
          <SortByfilter />
          <RegionTags />
          <StatusFilter />
        </div>
        <div className="p-6">
          <CountryList countries={countries} />
        </div>
      </article>
    </section>
  );
};
