import { Region } from '../interfaces/ContriesInfo.interface';

export const RegionTags = () => {
  return (
    <div className="flex w-full sm:w-60 pb-14 font-bold text-xs">
      <span>
        <p className="text-xs text-[#6C727F] pb-2 font-bold">Region</p>
        <button className="bg-[#282B30] rounded-lg p-1.5 text-sm mr-6 mb-2 px-3">
          {Region.Americas}
        </button>
        <button className="bg-[#282B30] rounded-lg p-1.5 mr-4 px-3">
          {Region.Antarctic}
        </button>
        <button className="bg-[#282B30] rounded-lg p-1.5  mr-4 px-3">
          {Region.Africa}
        </button>
        <button className="bg-[#282B30] rounded-lg p-1.5  mr-4 px-3">
          {Region.Asia}
        </button>
        <button className="bg-[#282B30] rounded-lg p-1.5  mr-4 px-3">
          {Region.Europe}
        </button>
        <button className="bg-[#282B30] rounded-lg p-1.5  mr-4 px-3 mt-3">
          {Region.Oceania}
        </button>
      </span>
    </div>
  );
};
