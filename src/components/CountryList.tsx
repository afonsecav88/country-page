import { CountriesInfo } from '../interfaces/ContriesInfo.interface';

interface CountryListProp {
  countries: CountriesInfo[];
}

export const CountryList = ({ countries }: CountryListProp) => {
  return (
    <table className="flex flex-col gap-2 table-auto">
      <thead>
        <tr className="p-4 text-center text-xs text-[#6C727F]">
          <td>Flag</td>
          <td>Name</td>
          <td>Population</td>
          <td>Area(km²)</td>
          <td>Region</td>
        </tr>
      </thead>
      <tbody>
        {countries.map(({ flags, name, population, area, region }) => (
          <tr key={name.common} className="text-sm min-w-full">
            <td className="p-4 text-center">
              <img src={flags.svg} alt={name.common} className="w-10" h-10 />
            </td>
            <td>{name.common}</td>
            <td>{population}</td>
            <td>{area}</td>
            <td>{region}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
