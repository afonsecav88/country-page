import { FC } from 'react';
import { CountriesCount } from './CountriesCount';
import { SearchByFilter } from './SearchByFilter';
import { StatusFilter } from './StatusFilter';
import { CountryList } from './CountryList';
import { SortByFilter } from './SortByFilter';

import { RegionTags } from './RegionTags';

export const ContainerCard: FC = () => {
  return (
    <section
      className="grid grid-flow-col grid-rows-[20vw_minmax(20rem,auto)] md:grid-rows-[4vw_minmax(auto,auto)] gap-5 p-2 sm:pt-6 bg-[#1C1D1F] text-[#D2D5DA]  w-[94vw] md:w-[96vw]  lg:w-[90vw] xl:w-[83vw] absolute top-48 rounded-lg
     border-[#282B30] border pb-8">
      <article className="inline-grid grid-flow-row grid-cols-1 md:grid-flow-col justify-between sm:px-8 pt-2 gap-4">
        <CountriesCount />
        <SearchByFilter />
      </article>

      <article className="inline-grid grid-flow-row lg:grid-flow-col justify-between sm:px-8 ">
        <span>
          <SortByFilter />
          <RegionTags />
          <StatusFilter />
        </span>
        <CountryList />
      </article>
    </section>
  );
};
