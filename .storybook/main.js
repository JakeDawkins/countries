module.exports = {
  stories: [
    '../components/**/*.stories.tsx',
    // "../stories/**/*.stories.mdx",
    // "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    // added based on an example from this SO thread
    // https://stackoverflow.com/questions/65495912/storybook-tailwind-how-should-i-add-tailwind-to-storybook
    {
      name: '@storybook/addon-postcss',
      options: {
        cssLoaderOptions: {
          importLoaders: 1,
        },
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5',
  },
};
