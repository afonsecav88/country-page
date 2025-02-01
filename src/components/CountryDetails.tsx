import { useEffect } from 'react';
import { useGetNeightbouringCountries } from '../hooks/useGetNeightbouringCountries';
import { CountriesInfo } from '../interfaces/CountriesInfo.interface';
import { useNavigate } from 'react-router-dom';
import { useFormattedCountryName } from '../hooks/useFormattedName';

type CountryDetailsProps = {
  country: CountriesInfo;
};

export const CountryDetails = ({ country }: CountryDetailsProps) => {
  const navigate = useNavigate();
  const { formattedCountryName } = useFormattedCountryName();
  const {
    flags,
    name,
    population,
    area,
    capital,
    subregion,
    currencies,
    languages,
    continents,
    borders,
  } = country;

  const { getNeightbouringCountries, neightbouringCountries } =
    useGetNeightbouringCountries();

  useEffect(() => {
    getNeightbouringCountries(borders);
  }, [country]);

  return (
    <section
      className="grid grid-flow-col grid-rows-[20vw_minmax(20rem,auto)] md:grid-rows-[4vw_minmax(auto,auto)] gap-5  sm:pt-6 bg-[#1C1D1F] text-[#D2D5DA] w-full md:w-[70vw] lg-w-[56.5vw] max-w-[45rem] h-auto absolute top-52 rounded-lg
  border-[#282B30] border pb-8">
      <div className="flex flex-col  flex-wrap">
        <div className="flex justify-center pb-2 sm:pb-10 relative -top-16">
          {' '}
          <img
            src={flags.svg}
            alt={name.common}
            className="min-w-64 h-44 rounded-2xl"
          />
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-col items-center pb-16 pt-6 sm:pt-2 md:pt-20">
          <p className="text-3xl font-bold">{name.common}</p>
          <p className="text-base font-semibold">{name.official}</p>
        </div>
        <div className="flex gap-10 flex-col items-center sm:flex-row justify-center pb-6">
          <span className="inline-flex bg-[#282B30] gap-3 p-3 rounded-md w-fit items-center">
            <p className="text-sm font-semibold">Population</p>
            <div className="border-[#1E1F23] min-h-8 border"></div>
            <p className="text-md font-semibold">
              {population.toLocaleString()}
            </p>
          </span>
          <span className="inline-flex bg-[#282B30] gap-3 p-3 rounded-md w-fit items-center">
            <p className="text-sm font-semibold">Area(km²)</p>
            <div className="border-[#1E1F23] min-h-8 border"></div>
            <p className="text-md font-semibold">{area.toLocaleString()}</p>
          </span>
        </div>
        <hr className="border-[#23262b] border w-full" />
        <div className="inline-flex  justify-start pl-10 gap-40 sm:justify-between sm:px-6 py-6 items-center">
          <p className="text-sm font-semibold">Capital</p>
          <p className="text-sm font-semibold">{capital}</p>
        </div>
        <hr className="border-[#23262b] border w-full" />
        <div className="inline-flex  justify-start pl-10 gap-36 sm:justify-between sm:px-6 py-6 items-center">
          <p className="text-sm font-semibold">Subregion</p>
          <p className="text-sm font-semibold">{subregion}</p>
        </div>
        <hr className="border-[#23262b] border w-full" />
        <div className="inline-flex justify-start pl-10 gap-36 sm:justify-between sm:px-6 py-6 items-center">
          <div>
            <p className="text-sm font-semibold">Language</p>
          </div>
          <div className="flex text-sm font-semibold">
            {Object.values(languages).join(', ')}
          </div>
        </div>
        <hr className="border-[#23262b] border w-full" />
        <div className="inline-flex  justify-start pl-10 gap-36 sm:justify-between sm:px-6 py-6 items-center">
          <p className="text-sm font-semibold">Currencies</p>
          {Object.values(currencies).map((c) => (
            <p key={c.name}>{c.name}</p>
          ))}
        </div>
        <hr className="border-[#23262b] border w-full" />
        <div className="inline-flex  justify-start pl-10 gap-36 sm:justify-between sm:px-6 py-6 items-center">
          <p className="text-sm font-semibold">Continents</p>
          {continents.map((continent) => (
            <p key={continent}>{continent}</p>
          ))}
        </div>
        <hr className="border-[#23262b] border w-full" />
        <div className="inline-flex  justify-start pl-10 sm:justify-between sm:px-6 py-6 items-center">
          <p className="text-sm font-semibold">Neighboring Countries</p>
        </div>
        <div className="flex justify-start pl-10 sm:px-6 sm:py-2 gap-4 flex-wrap">
          {neightbouringCountries.map((neighbouring) => (
            <button
              key={neighbouring?.name.common}
              onClick={() =>
                navigate(
                  `/countries/country-details/${formattedCountryName(
                    neighbouring?.name.common!
                  )}`
                )
              }
              className="flex flex-col flex-wrap">
              <img
                src={neighbouring?.flags.svg}
                alt={neighbouring?.name.common}
                className="w-20 max-h-12 rounded-sm"
              />
              <p className="text-xs font-semibold pt-2">
                {neighbouring?.name.common}
              </p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
