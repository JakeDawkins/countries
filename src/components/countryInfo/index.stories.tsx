import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import CountryInfo from '.';
import { Country } from '../../__generated__/graphql';
import { mockCountry } from '../../utils/mockData';

export default {
  title: 'CountryInfo',
  component: CountryInfo,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof CountryInfo>;

export const FullData = () => {
  return <CountryInfo country={mockCountry} />;
};
