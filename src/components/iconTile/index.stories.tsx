import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import IconTile from '.';

export default {
  title: 'IconTile',
  component: IconTile,
} as ComponentMeta<typeof IconTile>;

export const WithMessageAndTitle = () => {
  return (
    <IconTile
      title="This data may be incorrect"
      message="This data is fetched from an API source that may contain incorrect information"
      color="#cccccc"
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
