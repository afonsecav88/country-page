import { useState } from 'react';

export const StatusFilter = () => {
  const [checkMember, setCheckMember] = useState(false);
  const [checkIndependient, setCheckIndependient] = useState(false);

  console.log(checkMember);

  return (
    <fieldset className="flex flex-col min-w-72 pb-3">
      <legend className="text-xs text-[#D2D5DA] pb-2">Status</legend>
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
          id="independient"
          name="checkIndependient"
          checked={checkIndependient}
          onChange={() => setCheckIndependient(!checkIndependient)}
          className={`w-5 h-5 appearance-none rounded-sm border-[1.5px] p-2 cursor-pointer transition-all border-[#6C727F] bg-[#1C1D1F] checked:bg-[url('/src/assets/Done_round.svg')]
            checked:bg-[#4E81EE] checked:bg-[center] checked:bg-[length:90%] bg-no-repeat checked:border-0`}
        />
        <label className="text-sm ml-2">Independient</label>
      </div>
    </fieldset>
  );
};
