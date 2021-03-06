import React from 'react'
import { Story, Meta } from '@storybook/react'
import Button, { Props } from '.'

export default {
  title: 'Menu Button',
  component: Button,
  args: {
    onClick: () => null,
    active: false
  },
  argTypes: {
    active: {
      control: {
        type: 'boolean'
      }
    }
  }
} as Meta

export const Default: Story<Props> = (args) => <Button {...args} />
