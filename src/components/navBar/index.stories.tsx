import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import NavBar from '.';

export default {
  title: 'NavBar',
  component: NavBar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof NavBar>;

export const Responsive = () => {
  return (
    <div className="flex flex-1 h-full">
      <NavBar />
    </div>
  );
};
