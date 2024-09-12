export const SortByfilter = () => {
  return (
    <div className="flex flex-col min-w-72 pb-2">
      <p className="text-xs text-[#D2D5DA] pb-2">Sort by</p>
      <select
        name="select"
        className="min-w-12 bg-[#1C1D1F] border-[#282B30] border-2 focus:outline-none p-2 rounded-md mb-6 text-sm">
        <option value="population" defaultValue={'Population'}>
          Population
        </option>
        <option value="name">Name</option>
        <option value="area">Área</option>
      </select>
    </div>
  );
};
