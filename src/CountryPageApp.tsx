import { ContainerCard } from './components/ContainerCard';
import { Header } from './components/Header';

function CountryPageApp() {
  return (
    <>
      <Header />
      <main className="flex justify-center bg-[#1A1B1E] min-h-screen">
        <ContainerCard />
      </main>
    </>
  );
}

export default CountryPageApp;
