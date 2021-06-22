import 'jest-styled-components'
import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../utils/tests/helpers'
import BlinkText from '.'

describe('<BlinkText />', () => {
  const text = 'Bem vindo ao meu blog front-end!'
  const heading = { level: 1, name: text }
  const Component = <BlinkText>{text}</BlinkText>

  it('should render the text of BlinkText', () => {
    renderWithTheme(Component)
    expect(screen.getByRole('heading', heading))
  })

  it('should not render the BlinkText on mobile', () => {
    renderWithTheme(Component)

    const element = screen.getByRole('heading', heading).parentElement

    expect(element).toHaveStyleRule('display', 'none', {
      media: '(max-width: 920px)'
    })

    expect(element).toMatchSnapshot()
  })
})
