import 'jest-styled-components'
import { screen } from '@testing-library/react'

import { renderWithTheme } from '../../utils/tests/helpers'
import Posts from '.'

describe('<Posts />', () => {
  const posts = [
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

  const Component = <Posts posts={posts} />

  const media = '(max-width: 920px)'

  it('should apply styles to the post list on mobile', () => {
    renderWithTheme(Component)

    const postList = screen.getByTestId('post-list')

    expect(postList).toHaveStyleRule('grid-template-columns', '1fr', { media })
    expect(postList).toHaveStyleRule('padding-top', '10px', { media })
  })

  it('should apply styles to the post item on mobile', () => {
    const { container } = renderWithTheme(Component)

    const items = container.querySelector('[data-testid="post-list"] > div')

    expect(items).toHaveStyleRule('height', '17rem', { media })
    expect(items).toHaveStyleRule('padding', '10px 20px', { media })
  })
})
