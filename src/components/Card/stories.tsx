import React from 'react'
import { Story, Meta } from '@storybook/react'
import Card, { PropTypes } from '.'

export default {
  title: 'Card',
  component: Card,
  args: {
    children: '<h1>algum componente aqui</h1>'
  }
} as Meta

export const Default: Story<PropTypes> = (args) => (
  <div style={{ background: '#000', padding: '50px' }}>
    <Card {...args} />
  </div>
)
