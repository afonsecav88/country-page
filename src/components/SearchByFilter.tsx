export const SearchByFilter = () => {
  return (
    <span className="inline-flex">
      <input
        type="text"
        name="searchBy"
        id="searchBy"
        placeholder="Search by Name, Region, Subregion"
        className="bg-[url('/src/assets/Search.svg')] bg-no-repeat bg-[10px_center] bg-[#282B30] text-[#D2D5DA] pl-12 absolute min-w-72 h-9 text-xs rounded-lg shadow-sm focus:outline-0 focus:border-sky-500"
      />
    </span>
  );
};
