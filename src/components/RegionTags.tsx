import { FC } from 'react';

import { countriesRegions } from '../mocks/countriesRegions';
import { useRegionTags } from '../hooks/useRegionTags';

export const RegionTags: FC = () => {
  const { checkSelectedRegion, handleOnClickRegion } = useRegionTags();
  return (
    <div className="lg:w-60 pb-6 font-bold text-xs">
      <span>
        <p className="text-xs font-semibold text-[#D2D5DA] pb-2">Region</p>
        {countriesRegions.map((region) => (
          <button
            key={region}
            onClick={() => handleOnClickRegion(region)}
            className={
              checkSelectedRegion(region)
                ? 'inline-flex gap text-sm font-semibold bg-[#282B30] rounded-lg p-1.5 mr-4 mb-3 px-3'
                : 'inline-flex gap text-sm font-semibold bg-[#1C1D1F] rounded-lg p-1.5 mr-4 mb-3 px-3'
            }>
            {region}
          </button>
        ))}
      </span>
    </div>
  );
};
