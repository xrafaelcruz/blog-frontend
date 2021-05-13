import React from 'react'
import { Story, Meta } from '@storybook/react'
import { AuthorProps } from 'types/api'
import Author from '.'

export default {
  title: 'Author',
  component: Author,
  args: {
    name: 'Rafael Cruz',
    photo: [
      {
        url:
          'https://res.cloudinary.com/dlelhfg5w/image/upload/v1620861428/eu_97e37f6517.jpg'
      }
    ],
    description: 'Desenvolvedor front-end',
    content: '<p>Lorem ipsum</p>'
  }
} as Meta

export const Default: Story<AuthorProps> = (args) => <Author {...args} />
