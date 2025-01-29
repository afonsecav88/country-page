import { CountriesInfo } from '../interfaces/CountriesInfo.interface';

type CountriesTableProps = { paginatedCountries: CountriesInfo[] };
export const CountriesTable = ({ paginatedCountries }: CountriesTableProps) => {
  return (
    <div className="w-full lg:w-[55vw] overflow-x-auto">
      <table className="table-fixed w-full">
        <thead>
          <tr className="text-xs text-[#6C727F] font-bold">
            <td className="w-20 pb-5">Flag</td>
            <td className="w-56 pb-5">Name</td>
            <td className="min-w-20 pb-5">Population</td>
            <td className="min-w-20 pb-5">Area(km²)</td>
            <td className="min-w-32 pb-5">Region</td>
          </tr>
          <tr className="border-[#282B30] border-2" />
        </thead>
        <tbody className="min-h-[200px] h-auto align-top">
          {paginatedCountries.length > 0 ? (
            paginatedCountries.map(
              ({ flags, name, population, area, region }) => (
                <tr key={name.common} className="text-base text-[#D2D5DA]">
                  <td className="min-w-20 h-16 pt-4">
                    <img
                      src={flags.png}
                      alt={name.common}
                      className="w-12 h-8 rounded-sm"
                    />
                  </td>
                  <td className="pt-4 h-16">{name.common}</td>
                  <td className="pt-4 h-16">{population}</td>
                  <td className="pt-4 h-16">{area}</td>
                  <td className="pt-4 h-16">{region}</td>
                </tr>
              )
            )
          ) : (
            <tr>
              <td colSpan={5} className="text-center py-4 text-gray-400">
                No data available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
