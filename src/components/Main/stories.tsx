import Main, { MainProps } from '.'

import React from 'react'
import { Story, Meta } from '@storybook/react'

export default {
  title: 'Main',
  component: Main
} as Meta

const Template: Story<MainProps> = (args) => <Main {...args} />

export const Primary = Template.bind({})
Primary.args = {
  title: 'Rafael Cruz'
}
