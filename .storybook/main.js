import { mergeConfig } from 'vite'
import reactPlugin from '@vitejs/plugin-react'

export default {
  stories: ['../stories/**/*.stories.@(jsx|mdx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  features: {
    // previewMdx2: true, // experimental
  },

  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  core: {
    disableTelemetry: true,
  },
  async viteFinal(config) {
    // return the customized config
    return mergeConfig(config, {
      build: '',
      // customize the Vite config here
      plugins: [reactPlugin()],
      test: '',
    })
  },
}
