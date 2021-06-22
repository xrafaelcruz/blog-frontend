import styled, { ThemeProvider } from 'styled-components'
import { render, RenderResult } from '@testing-library/react'

import theme from 'styles/theme'
import { defaultStyles } from 'styles/global'

const Wrapper = styled.div`
  ${defaultStyles}
`

export const renderWithTheme = (children: React.ReactNode): RenderResult =>
  render(
    <ThemeProvider theme={theme}>
      <Wrapper>{children}</Wrapper>
    </ThemeProvider>
  )
