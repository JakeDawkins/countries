export interface CountryListDetail {
  __typename?: 'Country';
  name: string;
  code: string;
  emoji: string;
}
export function groupCountriesByStartingLetter(
  countries: CountryListDetail[] | undefined,
): { [letter: string]: CountryListDetail[] } {
  if (!countries) return {};
  return countries.reduce((acc, country) => {
    const { name } = country;
    let char = name.charAt(0).toUpperCase();
    // add country to entry in map, or start new entry
    acc[char] = [].concat(acc[char] || [], country);
    return acc;
  }, {});
}
