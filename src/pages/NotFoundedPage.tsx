import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

export const NotFoundedPage: FC = () => {
  const navigate = useNavigate();
  return (
    <div className="text-[#D2D5DA]">
      <div className="inline-flex gap-4 items-center p-5">
        <p>Not FoundedPage</p>
        <button
          onClick={() => navigate('/')}
          className="bg-blue-500 p-2 rounded-md">
          ⬅ Go Home
        </button>
      </div>
    </div>
  );
};
