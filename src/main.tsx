import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';
import CountryPageApp from './CountryPageApp.tsx';
import { CountryProvider } from './context/CountryProvider.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CountryProvider>
      <CountryPageApp />
    </CountryProvider>
  </StrictMode>
);
