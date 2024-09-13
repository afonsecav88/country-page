import { useEffect, useState } from 'react';
import { CountriesInfo } from '../interfaces/ContriesInfo.interface';
import { CountryService } from '../services/country.service';

export const useGetCountries = () => {
  const [countries, setCountries] = useState<CountriesInfo[]>([]);
  useEffect(() => {
    CountryService.getCountiesInfo()
      .then((resp) => {
        if (!resp) return;
        setCountries(resp);
      })
      .catch((err) => console.log(err));
  }, []);

  return { countries };
};
