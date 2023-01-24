import { Country, CountryInfoFragment } from '../__generated__/graphql';

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
};
