import React from 'react'
import { Story, Meta } from '@storybook/react'
import Post, { PropTypes } from '.'

export default {
  title: 'Post',
  component: Post,
  args: {
    title: 'Post1',
    createdAt: '2021-05-01T18:58:27.880Z'
  }
} as Meta

export const Default: Story<PropTypes> = (args) => (
  <div style={{ background: '#000', padding: '50px' }}>
    <Post {...args} />
  </div>
)
