import { use, useEffect, useState } from 'react';
import { CountryContext } from '../context/CountryContext';
import { CountriesInfo } from '../interfaces/CountriesInfo.interface';

export const StatusFilter = () => {
  const { countries, setCountries } = use(CountryContext);
  const [checkMember, setCheckMember] = useState(false);
  const [checkIndependent, setCheckIndependent] = useState(false);
  const [allCountries, setAllCountries] = useState<CountriesInfo[]>([]);

  useEffect(() => {
    filterCountriesMembers();
  }, [checkMember]);

  const filterCountriesMembers = () => {
    setAllCountries(countries);
    console.log('checkMember', checkMember);
    if (checkMember) {
      const membersCountries = countries.filter(
        (country) => country.unMember === true
      );
      console.log('membersCountries', membersCountries);
      setCountries(membersCountries);
    } else {
      setCountries(allCountries);
    }
  };

  const handleOnChangeCheckMember = () => {
    setCheckMember(!checkMember);
  };
  const handleOnChangeCheckIndependent = () => {
    setCheckIndependent(!checkIndependent);
  };

  return (
    <fieldset className="flex flex-col min-w-72 pb-8">
      <legend className="text-xs font-bold text-[#D2D5DA] pb-2">Status</legend>
      <div className="inline-flex mb-2">
        <input
          type="checkbox"
          id="member"
          name="checkMember"
          checked={checkMember}
          onChange={handleOnChangeCheckMember}
          className={`w-5 h-5 appearance-none rounded-sm border-[1.5px] p-2 cursor-pointer transition-all border-[#6C727F] bg-[#1C1D1F] checked:bg-[url('/src/assets/Done_round.svg')]
            checked:bg-[#4E81EE] checked:bg-[center] checked:bg-[length:90%] bg-no-repeat checked:border-0`}
        />
        <label className="text-sm font-semibold ml-2">
          Member of the United Nations
        </label>
      </div>
      <div className="inline-flex">
        <input
          type="checkbox"
          id="independent"
          name="checkIndependent"
          checked={checkIndependent}
          onChange={handleOnChangeCheckIndependent}
          className={`w-5 h-5 appearance-none rounded-sm border-[1.5px] p-2 cursor-pointer transition-all border-[#6C727F] bg-[#1C1D1F] checked:bg-[url('/src/assets/Done_round.svg')]
            checked:bg-[#4E81EE] checked:bg-[center] checked:bg-[length:90%] bg-no-repeat checked:border-0`}
        />
        <label className="text-sm font-semibold ml-2">Independent</label>
      </div>
    </fieldset>
  );
};
