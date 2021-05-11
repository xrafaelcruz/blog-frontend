import React from 'react'
import { Story, Meta } from '@storybook/react'
import PostDetail from '.'
import { PostProps } from 'types/api'

export default {
  title: 'PostDetail',
  component: PostDetail,
  args: {
    title: 'Post1',
    createdAt: '2021-05-01T18:58:27.880Z',
    content: '<p>post1 conteudo</p>'
  },
  argTypes: {
    createdAt: {
      control: {
        type: 'date'
      }
    }
  }
} as Meta

export const Default: Story<PostProps> = (args) => (
  <div style={{ background: '#000', padding: '50px' }}>
    <PostDetail {...args} />
  </div>
)
