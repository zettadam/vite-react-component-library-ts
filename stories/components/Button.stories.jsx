import Button from '@/button/Button'

const defaultArgs = {
  size: 'md',
  type: 'button',
  disabled: false,
}

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    label: {
      control: 'text',
      if: { arg: 'children', truthy: false },
    },
    variant: {
      options: ['primary', 'secondary', 'tertiary', 'ghost', 'danger'],
      control: { type: 'select' },
    },
    type: {
      options: ['button', 'submit', 'reset'],
      control: { type: 'inline-radio' },
    },
    size: {
      options: ['xl', 'lg', 'md', 'sm', 'xs'],
      control: { type: 'radio' },
    },
    onClick: { action: 'clicked' },
  },
  parameters: {
    options: {
      storySort: {
        order: ['Primary', 'Secondary', 'Tertiary', 'Ghost', 'Danger'],
      },
    },
  },
}

export const Abstract = (args) => <Button {...args}>Button</Button>
Abstract.args = {
  ...defaultArgs,
}

export const Primary = (args) => <Button {...args}>Primary Button</Button>
Primary.args = {
  ...defaultArgs,
  variant: 'primary',
}

export const Secondary = (args) => <Button {...args}>Secondary Button</Button>
Secondary.args = {
  ...defaultArgs,
  variant: 'secondary',
}

export const Tertiary = (args) => <Button {...args}>Tertiary Button</Button>
Tertiary.args = {
  ...defaultArgs,
  variant: 'tertiary',
}

export const Ghost = (args) => <Button {...args}>Ghost Button</Button>
Ghost.args = {
  ...defaultArgs,
  variant: 'ghost',
}

export const Danger = (args) => <Button {...args}>Danger Button</Button>
Danger.args = {
  ...defaultArgs,
  variant: 'danger',
}

export const ButtonWithPrefixIcon = (args) => (
  <Button {...args}>
    <svg height="24" width="24">
      <use href="/symbols.svg#save-solid" />
    </svg>
    Save
  </Button>
)
ButtonWithPrefixIcon.args = {
  ...defaultArgs,
  variant: 'tertiary',
}

export const ButtonWithSuffixIcon = (args) => (
  <Button {...args}>
    Delete
    <svg height="24" width="24">
      <use href="/symbols.svg#trash-solid" />
    </svg>
  </Button>
)
ButtonWithSuffixIcon.args = {
  ...defaultArgs,
  variant: 'danger',
}
