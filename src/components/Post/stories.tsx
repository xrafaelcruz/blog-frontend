import React from 'react'
import { Story, Meta } from '@storybook/react'
import Post, { PropTypes } from '.'

export default {
  title: 'Post',
  component: Post,
  args: {
    title: 'Rafael Cruz',
    createdAt: '2021-05-01T18:58:27.880Z'
  }
} as Meta

export const Default: Story<PropTypes> = (args) => <Post {...args} />
