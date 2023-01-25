import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Layout from '.';

export default {
  title: 'Layout',
  component: Layout,
} as ComponentMeta<typeof Layout>;

export const Responsive = () => {
  return (
    <Layout>
      <p>sample content</p>
    </Layout>
  );
};
