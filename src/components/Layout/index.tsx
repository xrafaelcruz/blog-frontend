import Menu from 'components/Menu'
import * as S from './style'

export type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => (
  <S.Layout data-testid="layout">
    <S.Header>
      <Menu />
    </S.Header>

    {/* <S.Left></S.Left> */}

    <S.Main>{children}</S.Main>

    {/* <S.Right></S.Right> */}
  </S.Layout>
)

export default Layout
