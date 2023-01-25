import {
  type CountriesListQuery,
  type CountryInfoFragment,
} from '../__generated__/graphql';

export const mockCountryInfo: CountryInfoFragment = {
  __typename: 'Country',
  native: 'United States',
  phone: '1',
  continent: {
    name: 'North America',
  },
  capital: 'Washington D.C.',
  emoji: '🇺🇸',
  name: 'United States',
  languages: [
    {
      name: 'English',
    },
  ],
  currency: 'USD',
};

// { __typename?: 'Country', name: string, code: string, emoji: string }
export const mockCountryList: Pick<CountriesListQuery, 'countries'> = {
  countries: [
    { __typename: 'Country', name: 'My Country', code: 'HI', emoji: '👋' },
  ],
};
