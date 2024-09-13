interface CountriesCountProps {
  numberOfCountries: number;
}
export const CountriesCount = ({ numberOfCountries }: CountriesCountProps) => {
  return (
    <p className="text-[#6C727F] text-sm font-semibold">
      Found {numberOfCountries} countries
    </p>
  );
};
