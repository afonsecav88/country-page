export const useFormattedCountryName = () => {
  const formattedCountryName = (name: string) => {
    const paramUrl = name.toLowerCase().split(' ').join('-');
    return paramUrl;
  };

  return { formattedCountryName };
};
