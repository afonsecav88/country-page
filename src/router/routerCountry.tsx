import { createBrowserRouter, Navigate } from 'react-router-dom';
import { ContainerCard } from '../components/ContainerCard';
import { CountryDetailsPage } from '../pages/CountryDetailsPage';
import { NotFoundedPage } from '../pages/NotFoundedPage';

export const routerCountry = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="countries" />,
    errorElement: <NotFoundedPage />,
  },
  {
    path: 'countries',
    element: <ContainerCard />,
  },
  {
    path: 'countries/country-details/:id',
    element: <CountryDetailsPage />,
  },
]);
