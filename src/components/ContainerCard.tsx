import { CountriesCount } from './CountriesCount';
import { SearchByFilter } from './SearchByFilter';

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
    </section>
  );
};
