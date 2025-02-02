import { FC } from 'react';
import { Link } from 'react-router-dom';

export const NotFoundedPage: FC = () => {
  return (
    <div className="flex text-[#D2D5DA] pt-12">
      <div className="flex flex-col items-center text-center align-middle top-20 ">
        <p className="text-blue-500 text-7xl u">Página no Encontrada</p>
        <p className="text-blue-500 text-9xl text-center font-extrabold">404</p>
        <p className="text-amber-50 text-xl font-bold  bg-slate-500 rounded-full py-2 w-2/3">
          Lo sentimos, la página no fue encontrada !
        </p>
        <Link
          to="/"
          className="flex justify-center text-slate-600 txt-3xl w-fit mt-4 bg-cyan-400 py-2 px-6 font-bold rounded-md hover:bg-cyan-600 hover:text-amber-100 transition duration-200 ease-linear">
          Regresar
        </Link>
      </div>
    </div>
  );
};
