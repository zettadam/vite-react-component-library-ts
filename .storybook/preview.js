import '../public/css/main.css'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    expanded: true,
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  parameters: {
    storySort: {
      method: 'alphabetical',
      order: ['Introduction', 'Components', ['Button', '*', 'Work in Progress']],
    },
  },
}
