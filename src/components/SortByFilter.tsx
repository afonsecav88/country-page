export const SortByFilter = () => {
  return (
    <div className="pb-2">
      <p className="text-xs text-[#6C727F] font-bold pb-2 ">Sort by</p>
      <select
        name="select"
        className="w-full lg:w-64 bg-[#1C1D1F] border-[#282B30] border-2 focus:outline-none p-2 rounded-md mb-6 text-sm cursor-pointer">
        <option value="population" defaultValue={'Population'}>
          Population
        </option>
        <option value="name">Name</option>
        <option value="area">Área</option>
      </select>
    </div>
  );
};
