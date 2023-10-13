import type { StorybookConfig } from '@storybook/nextjs';

const config: StorybookConfig = {
  stories: ['../**/*.mdx', '../**/*.stories.@(js|jsx|ts|tsx)'],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  addons: [
    '@storybook/addon-essentials',
    {
      name: '@storybook/addon-styling',
      options: {
        sass: {
          implementation: require('sass'),
        },
      },
    },
  ]
}

export default config