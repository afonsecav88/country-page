import { useEffect, useState } from 'react';
import { CountriesInfo } from '../interfaces/ContriesInfo.interface';
import { CountryService } from '../services/country.service';

export const useGetCountries = (sortCountries: string) => {
  const [countries, setCountries] = useState<CountriesInfo[]>([]);
  useEffect(() => {
    CountryService.getCountiesInfo(sortCountries)
      .then((resp) => {
        if (!resp) return;
        setCountries(resp);
      })
      .catch((err) => console.log(err));
  }, [sortCountries]);

  return { countries };
};
