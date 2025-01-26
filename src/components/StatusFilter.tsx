import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { CountriesInfo } from '../interfaces/CountriesInfo.interface';
import { useGetCountries } from '../hooks/useGetCountries';

type StatusFilterProps = {
  setCountries: Dispatch<SetStateAction<CountriesInfo[]>>;
  countries: CountriesInfo[];
};

export const StatusFilter = ({
  setCountries,
  countries,
}: StatusFilterProps) => {
  const { getAllCountries } = useGetCountries();
  const [checkMember, setCheckMember] = useState(false);
  const [checkIndependent, setCheckIndependent] = useState(false);

  const filterCountries = () => {
    if (checkMember && checkIndependent) {
      const members = countries.filter((country) => country.unMember === true);
      const independent = countries.filter(
        (country) => country.unMember === false
      );
      console.log('members', members);
      console.log('independent', independent);
      setCountries([...members, ...independent]);
    } else if (checkMember) {
      setCountries(countries.filter((country) => country.unMember === true));
    } else if (checkIndependent) {
      setCountries(countries.filter((country) => country.unMember === false));
    } else {
      getAllCountries().then((allCountries) =>
        setCountries(allCountries || [])
      );
    }
  };

  useEffect(() => {
    filterCountries();
  }, [checkMember, checkIndependent]);

  return (
    <fieldset className="flex flex-col min-w-72 pb-8">
      <legend className="text-xs text-[#6C727F] font-bold pb-2">Status</legend>
      <div className="inline-flex mb-2">
        <input
          type="checkbox"
          id="member"
          name="checkMember"
          checked={checkMember}
          onChange={() => setCheckMember(!checkMember)}
          className={`w-5 h-5 appearance-none rounded-sm border-[1.5px] p-2 cursor-pointer transition-all border-[#6C727F] bg-[#1C1D1F] checked:bg-[url('/src/assets/Done_round.svg')]
            checked:bg-[#4E81EE] checked:bg-[center] checked:bg-[length:90%] bg-no-repeat checked:border-0`}
        />
        <label className="text-sm ml-2">Member of the United Nations</label>
      </div>
      <div className="inline-flex">
        <input
          type="checkbox"
          id="independent"
          name="checkIndependent"
          checked={checkIndependent}
          onChange={() => setCheckIndependent(!checkIndependent)}
          className={`w-5 h-5 appearance-none rounded-sm border-[1.5px] p-2 cursor-pointer transition-all border-[#6C727F] bg-[#1C1D1F] checked:bg-[url('/src/assets/Done_round.svg')]
            checked:bg-[#4E81EE] checked:bg-[center] checked:bg-[length:90%] bg-no-repeat checked:border-0`}
        />
        <label className="text-sm ml-2">Independent</label>
      </div>
    </fieldset>
  );
};
