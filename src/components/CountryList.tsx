import { Dispatch } from 'react';
import { CountriesInfo } from '../interfaces/ContriesInfo.interface';
import { PaginateButtons } from './PaginateButtons';

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
  return (
    <>
      <table className="table-fixed h-[650px]">
        <thead>
          <tr className="text-xs text-[#6C727F] font-bold">
            <td className="px-4 min-w-20   pb-5">Flag</td>
            <td className="px-7 w-48 min-w-48 min-h-12 pb-5">Name</td>
            <td className="px-10 min-w-20 pb-5">Population</td>
            <td className="px-12 min-w-20 pb-5">Area(km²)</td>
            <td className="px-12 min-w-28 pb-5">Region</td>
          </tr>
          <tr className="border-[#282B30] border-2" />
        </thead>
        <tbody>
          {countries.map(({ flags, name, population, area, region }) => (
            <tr
              key={name.common}
              className="table-row text-base  min-w-full text-[#D2D5DA]">
              <td className="px-4 min-w-20 pt-4 ">
                <img
                  src={flags.png}
                  alt={name.common}
                  className="w-12 h-8 rounded-sm"
                />
              </td>
              <td className="px-7 w-48 min-w-48 min-h-12  pt-4">
                {name.common}
              </td>
              <td className="px-10 min-w-20 pt-4">{population}</td>
              <td className="px-12 min-w-20 pt-4">{area}</td>
              <td className="px-12 min-w-28 pt-4">{region}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <PaginateButtons
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
};
