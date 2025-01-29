import { use, useEffect, useState } from 'react';
import { countriesRegions } from '../mocks/countriesRegions';
import { CountryContext } from '../context/countryContext';
import {
  CountriesInfo,
  SelectRegions,
} from '../interfaces/CountriesInfo.interface';
import { useGetCountries } from '../hooks/useGetCountries';

export const RegionTags = () => {
  const { countries, setCountries } = use(CountryContext);
  const { getAllCountries } = useGetCountries();
  const [selectedRegions, setSelectedRegions] = useState<SelectRegions[]>([]);
  const [countriesAllCountries, setCountriesAllCountries] = useState<
    CountriesInfo[]
  >([]);
  const [countriesFiltersByRegions, setCountriesFiltersByRegions] = useState<
    CountriesInfo[]
  >([]);

  console.log('countriesFiltersByRegions', countriesFiltersByRegions);

  useEffect(() => {
    getAllCountries().then((fetchedCountries) => {
      setCountriesAllCountries(fetchedCountries || []);
      // setCountries(fetchedCountries || []);
    });
  }, []);

  const addCountriesByRegions = (region: SelectRegions) => {
    const filterRegionsByCountry = [...countriesAllCountries].filter(
      (currentRegion) => currentRegion.region === region
    );
    setCountriesFiltersByRegions((prev) => [
      ...prev,
      ...filterRegionsByCountry,
    ]);
  };

  const removeCountriesByRegions = (region: SelectRegions) => {
    const filterRegionsByCountry = [...countriesFiltersByRegions].filter(
      (currentRegion) => currentRegion.region !== region
    );
    setCountriesFiltersByRegions([...filterRegionsByCountry]);
  };

  useEffect(() => {
    setCountries(countriesFiltersByRegions);
    if (!selectedRegions.length) {
      setCountries(countriesAllCountries);
    }
    console.log('seleccione una region');
  }, [selectedRegions, setSelectedRegions]);

  const checkSelectedRegion = (region: SelectRegions) => {
    return selectedRegions.includes(region);
  };

  const handleOnClickRegion = (region: SelectRegions) => {
    const isSelected = checkSelectedRegion(region);
    if (!isSelected) {
      setSelectedRegions((prev) => [...prev, region]);
      addCountriesByRegions(region);
    } else {
      const updatedRegions = [...selectedRegions].filter(
        (currentRegion) => currentRegion !== region
      );
      setSelectedRegions(updatedRegions);
      removeCountriesByRegions(region);
    }
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
