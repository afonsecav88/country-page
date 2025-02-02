import { FC, use } from 'react';
import { CountryContext } from '../context/CountryContext';
import next from '../assets/Expand_down.svg';

export const PaginateButtons: FC = () => {
  const { currentPage, setCurrentPage, lastPage } = use(CountryContext);

  const handleClickPreview = () => {
    if (currentPage === 1) return;
    setCurrentPage(currentPage - 1);
  };
  const handleClickNext = () => {
    if (currentPage === lastPage) return;
    setCurrentPage(currentPage + 1);
  };
  return (
    <span className="flex gap-4 justify-center items-center p-1 mt-4 mb-0  rounded-md text-sm font-semibold text-[#D2D5DA] ">
      <button
        className={`bg-[#282B30] px-3 py-2 rounded-md inline-flex justify-center w-36 ${
          currentPage === 1
            ? 'cursor-auto hover:bg-transparent bg-transparent'
            : 'cursor-pointer hover:bg-[#4E80EE]'
        }`}
        onClick={handleClickPreview}>
        <img src={next} alt="preview" className="rotate-90 w-5 mr-1" />
        Preview Page
      </button>
      <p className="px-4 text-base w-12 ">{currentPage}</p>
      <button
        className={`bg-[#282B30] px-3 py-2 rounded-md inline-flex justify-center w-36 ${
          currentPage === lastPage
            ? 'cursor-auto hover:bg-transparent bg-transparent'
            : 'cursor-pointer hover:bg-[#4E80EE]'
        }`}
        disabled={currentPage === lastPage}
        onClick={handleClickNext}>
        Next Page <img src={next} alt="next" className="-rotate-90 w-5 ml-1" />
      </button>
    </span>
  );
};
