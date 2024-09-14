import { Dispatch } from 'react';
import { CountriesInfo } from '../interfaces/ContriesInfo.interface';

interface CountryListProp {
  countries: CountriesInfo[];
  currentPage: number;
  setCurrentPage: Dispatch<React.SetStateAction<number>>;
}

export const CountryList = ({
  countries,
  currentPage,
  setCurrentPage,
}: CountryListProp) => {
  const handleClickPreview = () => {
    if (currentPage === 1) return;
    setCurrentPage(currentPage - 1);
    console.log('hice clic handleClickNext');
  };
  const handleClickNext = () => {
    if (currentPage === 25) return;
    setCurrentPage(currentPage + 1);
    console.log('hice click handleClickNext');
  };
  return (
    <>
      <table className="table-fixed ">
        <thead>
          <tr className="text-xs text-[#6C727F] font-bold xl:min-w-[60vw]">
            <td className="px-4 pb-5">Flag</td>
            <td className="px-7 pb-5">Name</td>
            <td className="px-10 pb-5">Population</td>
            <td className="px-12 pb-5">Area(km²)</td>
            <td className="px-12 pb-5">Region</td>
          </tr>
          <tr className="border-[#282B30] border-2" />
        </thead>
        <tbody>
          {countries.map(({ flags, name, population, area, region }) => (
            <tr
              key={name.common}
              className="table-row text-base  min-w-full text-[#D2D5DA] xl:min-w-[60vw] ">
              <td className="px-4 pt-4 ">
                <img
                  src={flags.png}
                  alt={name.common}
                  className="w-12 h-8 rounded-sm"
                />
              </td>
              <td className="px-7 pt-4">{name.common}</td>
              <td className="px-10 pt-4">{population}</td>
              <td className="px-12 pt-4">{area}</td>
              <td className="px-12 pt-4">{region}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <span className="flex gap-4 justify-center items-center p-1 mt-4  rounded-md text-sm font-semibold text-[#D2D5DA] ">
        <button
          className={`bg-[#282B30] px-3 py-2 rounded-md inline-flex justify-center w-36 ${
            currentPage === 1
              ? 'cursor-auto hover:bg-transparent bg-transparent'
              : 'cursor-pointer hover:bg-[#4E80EE]'
          }`}
          onClick={handleClickPreview}>
          <img
            src="src/assets/Expand_down.svg"
            alt="preview"
            className="rotate-90 w-5 mr-1 "
          />
          Preview Page
        </button>
        <p className="px-4 text-base">{currentPage}</p>
        <button
          className={`bg-[#282B30] px-3 py-2 rounded-md inline-flex justify-center w-36 ${
            currentPage === 25
              ? 'cursor-auto hover:bg-transparent bg-transparent'
              : 'cursor-pointer hover:bg-[#4E80EE]'
          }`}
          disabled={currentPage === 25}
          onClick={handleClickNext}>
          Next Page{' '}
          <img
            src="src/assets/Expand_down.svg"
            alt="preview"
            className="-rotate-90 w-5 ml-1"
          />
        </button>
      </span>
    </>
  );
};
