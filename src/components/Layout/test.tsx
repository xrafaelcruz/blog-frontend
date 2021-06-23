import 'jest-styled-components'
import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../utils/tests/helpers'
import Layout from '.'

describe('<Layout />', () => {
  const text = 'Teste'
  const heading = { level: 1, name: text }
  const Component = (
    <Layout>
      <h1>{text}</h1>
    </Layout>
  )

  const media = '(max-width: 920px)'

  it('should render the children of Layout', () => {
    renderWithTheme(Component)
    expect(screen.getByRole('heading', heading))
  })

  it('should apply styles to the layout on mobile', () => {
    renderWithTheme(Component)

    const layout = screen.getByTestId('layout')

    expect(layout).toHaveStyleRule('padding', '58px 0 40px', { media })
  })

  it('should apply styles to the header on mobile', () => {
    renderWithTheme(Component)

    const header = screen.getByRole('banner')

    expect(header).toHaveStyleRule('background', '#20232a', { media })
    expect(header).toHaveStyleRule(
      'border-bottom',
      '1px solid rgb(50 51 49 / 50%)',
      { media }
    )
    expect(header).toHaveStyleRule('left', '0', { media })
    expect(header).toHaveStyleRule('padding', '5px 15px', { media })
    expect(header).toHaveStyleRule('position', 'fixed', { media })
    expect(header).toHaveStyleRule('top', '0', { media })
  })

  it('should apply styles to the main on mobile', () => {
    renderWithTheme(Component)

    const main = screen.getByRole('main')

    expect(main).toHaveStyleRule('max-width', '100%', { media })
    expect(main).toHaveStyleRule('padding', '0', { media })
  })
})
