import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Icon, { icons, IconName } from '.';

import Docs from './docs';

export default {
  title: 'Icon',
  component: Icon,
  parameters: {
    docs: {
      page: Docs,
    },
  },
} as ComponentMeta<typeof Icon>;

const allIconNames = Object.keys(icons) as IconName[];

export const Gallery = () => {
  return (
    <div className="flex flex-row">
      {allIconNames.map((name) => {
        return (
          <div key={name} className="w-24">
            <Icon size={32} name={name} />
            <p>{name}</p>
          </div>
        );
      })}
    </div>
  );
};

export const Playground = (args) => {
  return (
    <Icon
      color={args.color}
      size={args.size}
      name={args.name}
      accessibilityLabel={args.accessibilityLabel}
    />
  );
};
Playground.args = {
  name: 'arrow-left',
  size: 48,
  color: '#abcdef',
  accessibilityLabel: 'My Label',
};
