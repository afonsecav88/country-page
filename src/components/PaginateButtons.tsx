import { Dispatch } from 'react';

interface PaginateButtonsProps {
  currentPage: number;
  setCurrentPage: Dispatch<React.SetStateAction<number>>;
}

export const PaginateButtons = ({
  currentPage,
  setCurrentPage,
}: PaginateButtonsProps) => {
  const handleClickPreview = () => {
    if (currentPage === 1) return;
    setCurrentPage(currentPage - 1);
  };
  const handleClickNext = () => {
    if (currentPage === 25) return;
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
        <img
          src="src/assets/Expand_down.svg"
          alt="preview"
          className="rotate-90 w-5 mr-1 "
        />
        Preview Page
      </button>
      <p className="px-4 text-base w-12 ">{currentPage}</p>
      <button
        className={`bg-[#282B30] px-3 py-2 rounded-md inline-flex justify-center w-36 ${
          currentPage === 25
            ? 'cursor-auto hover:bg-transparent bg-transparent'
            : 'cursor-pointer hover:bg-[#4E80EE]'
        }`}
        disabled={currentPage === 25}
        onClick={handleClickNext}>
        Next Page{' '}
        <img
          src="src/assets/Expand_down.svg"
          alt="preview"
          className="-rotate-90 w-5 ml-1"
        />
      </button>
    </span>
  );
};
