import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import CountryInfo from '.';
import { Country } from '../../__generated__/graphql';
import { mockCountryInfo } from '../../utils/mockData';

import Docs from './docs';

export default {
  title: 'CountryInfo',
  component: CountryInfo,
  parameters: {
    docs: {
      page: Docs,
    },
  },
} as ComponentMeta<typeof CountryInfo>;

export const FullData = () => {
  const {
    __typename,
    continent,
    emoji,
    name,
    native,
    phone,
    capital,
    languages,
  } = mockCountryInfo;
  return (
    <CountryInfo
      country={{
        __typename,
        continent,
        emoji,
        name,
        native,
        phone,
        capital,
        languages,
      }}
    />
  );
};

// This is to make sure we're appropriately handling missing data
export const MissingPieces = () => {
  const { __typename, continent, emoji, name, native, phone, capital } =
    mockCountryInfo;
  return (
    <CountryInfo
      // @ts-ignore - this is supposed to be incomplete data
      country={{
        continent,
        name,
        capital,
      }}
    />
  );
};
