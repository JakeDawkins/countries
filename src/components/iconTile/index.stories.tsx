import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import IconTile from '.';

import Docs from './docs';

export default {
  title: 'IconTile',
  component: IconTile,
  parameters: {
    docs: {
      page: Docs,
    },
  },
} as ComponentMeta<typeof IconTile>;

export const WithMessageAndTitle = () => {
  return (
    <IconTile
      title="This data may be incorrect"
      message="This data is fetched from an API source that may contain incorrect information"
      color="#999999"
      icon="globe"
    />
  );
};

export const WithMessageOnly = () => {
  return (
    <IconTile
      message="This data is fetched from an API source that may contain incorrect information"
      color="#eab208"
      icon="info"
    />
  );
};
