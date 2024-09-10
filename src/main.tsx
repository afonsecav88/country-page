import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';
import CountryPageApp from './CountryPageApp.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CountryPageApp />
  </StrictMode>
);
