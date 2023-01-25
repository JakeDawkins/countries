export interface CountryListDetail {
  __typename?: 'Country';
  name: string;
  code: string;
  emoji: string;
}
export function groupCountriesByStartingLetter(
  countries: CountryListDetail[] | undefined,
): Record<string, CountryListDetail[]> {
  if (countries == null) return {};
  return countries.reduce((acc, country) => {
    const { name } = country;
    const char = name.charAt(0).toUpperCase();
    // add country to entry in map, or start new entry
    // @ts-expect-error ts(2769)
    acc[char] = [].concat(acc[char] || [], country);
    return acc;
  }, {});
}
