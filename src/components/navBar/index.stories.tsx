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

export const Basic = () => {
  return <NavBar />;
};

export const ListPageActive = () => {
  return <NavBar />;
};
ListPageActive.parameters = {
  nextRouter: {
    pathname: '/list',
    path: '/list',
    asPath: '/list',
  },
};
