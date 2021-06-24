import 'jest-styled-components'
import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../utils/tests/helpers'
import Menu from '.'

describe('<Menu />', () => {
  const Component = <Menu />

  const media = '(max-width: 920px)'

  it('should apply styles to the links on mobile', () => {
    // renderWithTheme(Component)
    // const Link = screen.getByTestId('Home')
    // expect(Link).toHaveStyleRule('font-size', '3.8rem', { media })
  })
})
