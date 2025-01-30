import { RouterProvider } from 'react-router-dom';
import { Header } from './components/Header';
import { routerCountry } from './router/routerCountry';
import { useGetCountries } from './hooks/useGetCountries';
import { useEffect } from 'react';

function CountryPageApp() {
  const { getAllCountries } = useGetCountries();
  useEffect(() => {
    getAllCountries();
  }, []);

  return (
    <>
      <Header />
      <main className="flex justify-center min-h-screen">
        <RouterProvider router={routerCountry} />
      </main>
    </>
  );
}

export default CountryPageApp;
