import React from 'react'
import { Story, Meta } from '@storybook/react'
import Main, { MainProps } from '.'

export default {
  title: 'Main',
  component: Main,
  args: {
    children: <h1>Teste</h1>
  }
} as Meta

export const Default: Story<MainProps> = (args) => <Main {...args} />
