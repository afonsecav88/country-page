import { RouterProvider } from 'react-router-dom';
import { Header } from './components/Header';
import { routerCountry } from './router/routerCountry';

function CountryPageApp() {
  return (
    <>
      <Header />
      <main className="flex justify-center bg-[#1A1B1E] min-h-screen">
        <RouterProvider router={routerCountry} />
      </main>
    </>
  );
}

export default CountryPageApp;
