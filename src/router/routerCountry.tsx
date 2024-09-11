import { createBrowserRouter } from 'react-router-dom';
import { ContainerCard } from '../components/ContainerCard';
import { CountryDetailsPage } from '../pages/CountryDetailsPage';

export const routerCountry = createBrowserRouter([
  {
    path: '/',
    element: <ContainerCard />,
  },
  {
    path: 'country-details',
    element: <CountryDetailsPage />,
  },
]);
