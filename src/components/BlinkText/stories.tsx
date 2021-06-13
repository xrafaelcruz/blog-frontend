import React from 'react'
import { Story, Meta } from '@storybook/react'
import BlinkText, { Props } from '.'

export default {
  title: 'BlinkText',
  component: BlinkText,
  args: {
    children: 'Bem vindo ao meu blog front-end!'
  }
} as Meta

export const Default: Story<Props> = (args) => <BlinkText {...args} />
