import React from 'react'
import { Story, Meta } from '@storybook/react'
import Posts, { PropTypes } from '.'

export default {
  title: 'Posts',
  component: Posts,
  args: {
    posts: [
      {
        title: 'post1',
        content: '<p>post1 conteudo</p>',
        createdAt: '2021-05-01T18:58:27.880Z'
      }
    ]
  }
} as Meta

export const Default: Story<PropTypes> = (args) => (
  <div style={{ background: '#000', padding: '50px' }}>
    <Posts {...args} />
  </div>
)
