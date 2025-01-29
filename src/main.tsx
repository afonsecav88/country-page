import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import CountryPageApp from './CountryPageApp.tsx';
import { CountryProvider } from './context/CountryProvider.tsx';
import './styles.css';
import 'react-loading-skeleton/dist/skeleton.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CountryProvider>
      <CountryPageApp />
    </CountryProvider>
  </StrictMode>
);
