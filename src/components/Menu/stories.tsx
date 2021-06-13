import React from 'react'
import { Story, Meta } from '@storybook/react'
import Menu from '.'
import * as S from 'styles/storybook'

export default {
  title: 'Menu',
  component: Menu
} as Meta

export const Default: Story = (args) => (
  <S.WrapperAlignedLeft>
    <Menu {...args} />
  </S.WrapperAlignedLeft>
)
