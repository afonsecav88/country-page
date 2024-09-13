export const SearchByFilter = () => {
  return (
    <input
      type="text"
      name="searchBy"
      id="searchBy"
      placeholder="Search by Name, Region, Subregion"
      className="bg-[url('/src/assets/Search.svg')] bg-no-repeat bg-[10px_center] bg-[rgb(40,43,48)] text-[#D2D5DA] pl-12 mr-2 min-w-72 h-9 text-xs rounded-lg shadow-sm focus:outline-0 focus:border-sky-500"
    />
  );
};
