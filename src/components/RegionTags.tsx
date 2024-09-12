import { Region } from '../interfaces/ContriesInfo.interface';

export const RegionTags = () => {
  return (
    <div className="flex w-full sm:w-60 pb-14">
      <span>
        <p className="text-xs text-[#D2D5DA] pb-2">Region</p>
        <button className="bg-[#282B30] rounded-lg p-1.5 text-sm mr-6 mb-2 px-3">
          {Region.Americas}
        </button>
        <button className="bg-[#282B30] rounded-lg p-1.5 text-sm mr-4 px-3">
          {Region.Antarctic}
        </button>
        <button className="bg-[#282B30] rounded-lg p-1.5 text-sm mr-4 px-3">
          {Region.Africa}
        </button>
        <button className="bg-[#282B30] rounded-lg p-1.5 text-sm mr-4 px-3">
          {Region.Asia}
        </button>
        <button className="bg-[#282B30] rounded-lg p-1.5 text-sm mr-4 px-3">
          {Region.Europe}
        </button>
      </span>
    </div>
  );
};
