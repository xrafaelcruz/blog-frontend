import React from 'react'
import { Story, Meta } from '@storybook/react'
import Posts, { Props } from '.'

export default {
  title: 'Posts',
  component: Posts,
  args: {
    posts: [
      {
        id: '0',
        title: 'post1',
        content: '<p>post1 conteudo</p>',
        createdAt: '2021-05-01T18:58:27.880Z'
      },
      {
        id: '1',
        title: 'post2',
        content: '<p>post2 conteudo</p>',
        createdAt: '2021-05-01T18:58:27.880Z'
      }
    ]
  }
} as Meta

export const Default: Story<Props> = (args) => <Posts {...args} />
