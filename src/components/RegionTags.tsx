import { Dispatch, SetStateAction } from 'react';
import { CountriesInfo } from '../interfaces/CountriesInfo.interface';
import { countriesRegions } from '../mocks/countriesRegions';

type RegionTagsProps = {
  setCountries: Dispatch<SetStateAction<CountriesInfo[]>>;
  countries: CountriesInfo[];
};
export const RegionTags = ({ setCountries, countries }: RegionTagsProps) => {
  // const handleOnClickRegion = (region: string) => {
  //   setSortCountries(region);
  // };
  return (
    <div className="lg:w-60 pb-6 font-bold text-xs">
      <span>
        <p className="text-xs text-[#6C727F] pb-2 font-bold">Region</p>
        {countriesRegions.map((region) => (
          <button
            key={region}
            onClick={() => {}}
            className="inline-flex gap bg-[#282B30] hover:bg-[#4E80EE] rounded-lg p-1.5 mr-4 mb-3 px-3">
            {region}
          </button>
        ))}
      </span>
    </div>
  );
};
