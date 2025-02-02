import { use, useState, useEffect } from 'react';
import { CountryContext } from '../context/CountryContext';
import {
  SelectRegions,
  CountriesInfo,
} from '../interfaces/CountriesInfo.interface';
import { useGetCountries } from './useGetCountries';

export const useRegionTags = () => {
  const { getAllCountries } = useGetCountries();
  const { setCountries, setCurrentPage } = use(CountryContext);
  const [selectedRegions, setSelectedRegions] = useState<SelectRegions[]>([]);
  const [countriesByRegions, setCountriesByRegions] = useState<CountriesInfo[]>(
    []
  );

  useEffect(() => {
    getAllCountries().then((countries) =>
      setCountriesByRegions(countries || [])
    );
  }, []);

  useEffect(() => {
    if (selectedRegions.length === 0) {
      setCountries(countriesByRegions);
      return;
    }

    const filteredCountries = countriesByRegions.filter((country) =>
      selectedRegions.includes(country.region as SelectRegions)
    );

    setCountries(filteredCountries);
    setCurrentPage(1);
  }, [selectedRegions, countriesByRegions, setCountries, setCurrentPage]);

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
  return { checkSelectedRegion, handleOnClickRegion };
};
