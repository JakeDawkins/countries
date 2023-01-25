import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import NavBar from '.';
import Docs from './docs';

export default {
  title: 'NavBar',
  component: NavBar,
  parameters: {
    docs: {
      page: Docs,
    },
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
