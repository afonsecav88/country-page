import { CountriesCount } from './CountriesCount';
import { RegionTags } from './RegionTags';
import { SearchByFilter } from './SearchByFilter';
import { SortByfilter } from './SortByfilter';
import { StatusFilter } from './StatusFilter';

export const ContainerCard = () => {
  return (
    <section
      className="bg-[#1C1D1F] text-slate-50 min-w-[90vw] max-w-[1280px] min-h-screen absolute top-48 rounded-lg
     border-[#282B30] border ">
      <article className="flex justify-between items-center p-6">
        <div className="text-left">
          <CountriesCount />
        </div>
        <div className="text-right">
          <SearchByFilter />
        </div>
      </article>
      <article className="flex flex-col sm:flex-row p-6">
        <div className="min-w-56 min-h-[60vh] border-sky-100 border p-4 mr-6">
          <SortByfilter />
          <RegionTags />
          <StatusFilter />
        </div>
        <div>
          <p>gato</p>
        </div>
      </article>
    </section>
  );
};
