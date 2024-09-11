import { CountriesCount } from './CountriesCount';
import { SearchByFilter } from './SearchByFilter';

export const ContainerCard = () => {
  return (
    <section
      className="flex justify-center content-center bg-[#1C1D1F] text-slate-50 min-w-[90vw] min-h-screen absolute top-48 rounded-lg
     border-[#282B30] border ">
      <div>
        <CountriesCount />
        <SearchByFilter />
      </div>
    </section>
  );
};
