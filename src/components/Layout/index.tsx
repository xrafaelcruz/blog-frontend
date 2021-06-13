import Menu from 'components/Menu'
import * as S from './style'

export type PropTypes = {
  children: React.ReactNode
}

const Layout = ({ children }: PropTypes) => (
  <S.Layout>
    <S.Header>
      <Menu />
    </S.Header>

    {/* <S.Left></S.Left> */}

    <S.Main>{children}</S.Main>

    {/* <S.Right></S.Right> */}
  </S.Layout>
)

export default Layout
