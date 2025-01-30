import { use } from 'react';
import { CountryContext } from '../context/CountryContext';
import { useNavigate } from 'react-router-dom';
import { useFormattedCountryName } from '../hooks/useFormattedName';

export const CountriesTable = () => {
  const { paginatedCountries } = use(CountryContext);
  const { formattedCountryName } = useFormattedCountryName();
  const navigate = useNavigate();

  return (
    <div className="w-full lg:w-[60vw] overflow-x-auto">
      <table className="table-fixed w-full">
        <thead>
          <tr className="text-xs text-[#D2D5DA] font-semibold">
            <td className="w-28 pb-5 pl-4 ">Flag</td>
            <td className="md:w-56  pb-5 ">Name</td>
            <td className="min-w-52 pb-5">Population</td>
            <td className="min-w-16 pb-5 pl-4">Area(km²)</td>
            <td className="min-w-32 pb-5 pl-4">Region</td>
          </tr>
          <tr className="border-[#282B30] border-2" />
        </thead>
        <tbody className="min-h-[200px] h-auto align-top font-semibold">
          {paginatedCountries.length > 0 ? (
            paginatedCountries.map(
              ({ flags, name, population, area, region }) => (
                <tr
                  key={name.common}
                  onClick={() =>
                    navigate(
                      `country-details/${formattedCountryName(name.common)}`
                    )
                  }
                  className="text-base text-[#D2D5DA] hover:bg-[#282B30] hover:cursor-pointer hover:transition-all  hover:duration-700 hover:ease-in-out">
                  <td className="min-w-20 h-16 pt-4 pl-3">
                    <img
                      src={flags.png}
                      alt={name.common}
                      className="w-12 h-8 rounded-sm"
                    />
                  </td>
                  <td className="pt-4 h-16">{name.common}</td>
                  <td className="pt-4 h-16">{population}</td>
                  <td className="pt-4 pl-4 h-16">{area}</td>
                  <td className="pt-4 h-16 pl-4">{region}</td>
                </tr>
              )
            )
          ) : (
            <tr>
              <td colSpan={5} className="text-center py-4 text-gray-400">
                <p>No se encontraron paises</p>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
