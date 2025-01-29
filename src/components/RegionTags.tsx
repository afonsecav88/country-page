import { use, useEffect, useState } from 'react';
import { countriesRegions } from '../mocks/countriesRegions';
import { CountryContext } from '../context/countryContext';
import {
  CountriesInfo,
  SelectRegions,
} from '../interfaces/CountriesInfo.interface';
import { useGetCountries } from '../hooks/useGetCountries';

export const RegionTags = () => {
  const { setCountries, setCurrentPage } = use(CountryContext);
  const { getAllCountries } = useGetCountries();
  const [selectedRegions, setSelectedRegions] = useState<SelectRegions[]>([]);
  const [countriesAllCountries, setCountriesAllCountries] = useState<
    CountriesInfo[]
  >([]);
  const [, setCountriesFiltersByRegions] = useState<CountriesInfo[]>([]);

  useEffect(() => {
    getAllCountries().then((fetchedCountries) => {
      setCountriesAllCountries(fetchedCountries || []);
    });
  }, []);

  useEffect(() => {
    if (selectedRegions.length === 0) {
      setCountries(countriesAllCountries);
      return;
    }
    const filteredCountries = countriesAllCountries.filter((country) =>
      selectedRegions.includes(country.region as SelectRegions)
    );

    setCountriesFiltersByRegions(filteredCountries);
    setCountries(filteredCountries);
    setCurrentPage(1);
  }, [selectedRegions, countriesAllCountries]);

  const checkSelectedRegion = (region: SelectRegions) => {
    return selectedRegions.includes(region);
  };

  const handleOnClickRegion = (region: SelectRegions) => {
    setSelectedRegions((prev) => {
      if (prev.includes(region)) {
        return prev.filter((r) => r !== region);
      } else {
        return [...prev, region];
      }
    });
  };

  return (
    <div className="lg:w-60 pb-6 font-bold text-xs">
      <span>
        <p className="text-xs text-[#6C727F] pb-2 font-bold">Region</p>
        {countriesRegions.map((region) => (
          <button
            key={region}
            onClick={() => handleOnClickRegion(region)}
            className={
              checkSelectedRegion(region)
                ? 'inline-flex gap bg-[#282B30] rounded-lg p-1.5 mr-4 mb-3 px-3'
                : 'inline-flex gap bg-[#1C1D1F] rounded-lg p-1.5 mr-4 mb-3 px-3'
            }>
            {region}
          </button>
        ))}
      </span>
    </div>
  );
};
