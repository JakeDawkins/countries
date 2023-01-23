import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Icon, { icons, IconName } from './';

export default {
  title: 'Icon',
  component: Icon,
  argTypes: {
    backgroundColor: { control: 'color' },
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
