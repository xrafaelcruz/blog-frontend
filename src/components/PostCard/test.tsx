import 'jest-styled-components'
import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../utils/tests/helpers'
import PostCard from '.'

describe('<PostCard />', () => {
  const title = 'Post1'
  const heading = { level: 2, name: title }
  const Component = (
    <PostCard id="0" title={title} createdAt="2021-05-01T18:58:27.880Z" />
  )

  const media = '(max-width: 920px)'

  it('should apply styles to the post title on mobile', () => {
    renderWithTheme(Component)

    const title = screen.getByRole('heading', heading)

    expect(title).toHaveStyleRule('font-size', '1.8rem', { media })
  })

  it('should apply styles to the post article on mobile', () => {
    renderWithTheme(Component)

    const article = screen.getByRole('article')

    expect(article).toHaveStyleRule('box-shadow', 'none', { media })
    expect(article).toHaveStyleRule('padding', '16px', { media })
    expect(article).toHaveStyleRule('gap', '10px', { media })
  })
})
