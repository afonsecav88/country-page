import { useEffect } from 'react';
import { useGetNeightbouringCountries } from '../hooks/useGetNeightbouringCountries';
import { CountriesInfo } from '../interfaces/CountriesInfo.interface';

type CountryDetailsProps = {
  hasExistCountry: CountriesInfo;
};

export const CountryDetails = ({ hasExistCountry }: CountryDetailsProps) => {
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
  } = hasExistCountry;

  const { getNeightbouringCountries, neightbouringCountries } =
    useGetNeightbouringCountries();

  console.log('neightbouringCountries', neightbouringCountries);
  useEffect(() => {
    getNeightbouringCountries(borders);
  }, []);

  return (
    <section
      className="grid grid-flow-col grid-rows-[20vw_minmax(20rem,auto)] md:grid-rows-[4vw_minmax(auto,auto)] gap-5  sm:pt-6 bg-[#1C1D1F] text-[#D2D5DA]  w-full md:w-[70vw]  lg:w-[56.5vw]  h-[59rem] absolute top-48 rounded-lg
  border-[#282B30] border pb-8">
      <div className="flex flex-col">
        <div className="flex justify-center pb-5">
          {' '}
          <img
            src={flags.svg}
            alt={name.common}
            className="w-12 h-8 rounded-sm"
          />
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-col items-center pb-5">
          <p>{name.common}</p>
          <p>{name.official}</p>
        </div>
        <div className="flex gap-4 justify-center pb-6">
          <span>Population</span>
          <span className="mr-10">{population}</span>
          <span>Area(km²)</span>
          <span>{area}</span>
        </div>
        <hr className="border-[#23262b] border w-full" />
        <div className="inline-flex justify-between px-6 py-6 items-center">
          <p>Capital</p>
          <p>{capital}</p>
        </div>
        <hr className="border-[#23262b] border w-full" />
        <div className="inline-flex justify-between px-6 py-6 items-center">
          <p>Subregion</p>
          <p>{subregion}</p>
        </div>
        <hr className="border-[#23262b] border w-full" />
        <div className="inline-flex justify-between px-6 py-6 items-center">
          <p>Language</p>
          {Object.values(languages).map((language) => (
            <p key={language}>{language}</p>
          ))}
        </div>
        <hr className="border-[#23262b] border w-full" />
        <div className="inline-flex justify-between px-6 py-6 items-center">
          <p>Currencies</p>
          {Object.values(currencies).map((c) => (
            <p key={c.name}>{c.name}</p>
          ))}
        </div>
        <hr className="border-[#23262b] border w-full" />
        <div className="inline-flex justify-between px-6 py-6 items-center">
          <p>Continents</p>
          {continents.map((continent) => (
            <p key={continent}>{continent}</p>
          ))}
        </div>
        <hr className="border-[#23262b] border w-full" />
        <div className="inline-flex justify-between px-6 py-6 items-center">
          <p>Neighboring Countries</p>
        </div>
        <div className="flex px-6 py-6 items-center gap-2">
          {neightbouringCountries.map((neighbouring) => (
            <div
              key={neighbouring?.name.common}
              className="flex flex-col flex-wrap">
              <img
                src={neighbouring?.flags.svg}
                alt={neighbouring?.name.common}
                className="w-20 h-16 rounded-sm"
              />
              <p> {neighbouring?.name.common}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
