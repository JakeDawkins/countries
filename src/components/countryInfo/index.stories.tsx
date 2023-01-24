import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import CountryInfo from '.';
import { Country } from '../../__generated__/graphql';
import { mockCountryInfo } from '../../utils/mockData';

export default {
  title: 'CountryInfo',
  component: CountryInfo,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof CountryInfo>;

export const FullData = () => {
  const { __typename, continent, emoji, name, native, phone, capital } =
    mockCountryInfo;
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
      }}
    />
  );
};
