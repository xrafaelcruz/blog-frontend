import React from 'react'
import { Story, Meta } from '@storybook/react'
import PostCard, { Props } from '.'

export default {
  title: 'PostCard',
  component: PostCard,
  args: {
    id: '1',
    title: 'Post1',
    createdAt: '2021-05-01T18:58:27.880Z'
  },
  argTypes: {
    createdAt: {
      control: {
        type: 'date'
      }
    }
  }
} as Meta

export const Default: Story<Props> = (args) => (
  <div style={{ width: '400px' }}>
    <PostCard {...args} />
  </div>
)
