import { CountriesInfo } from '../interfaces/ContriesInfo.interface';

interface CountryListProp {
  countries: CountriesInfo[];
}

export const CountryList = ({ countries }: CountryListProp) => {
  return (
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
              <img src={flags.png} alt={name.common} className="w-14 h-8" />
            </td>
            <td className="px-7 pt-4">{name.common}</td>
            <td className="px-10 pt-4">{population}</td>
            <td className="px-12 pt-4">{area}</td>
            <td className="px-12 pt-4">{region}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
