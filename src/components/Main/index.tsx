import * as S from './style'

export type PropTypes = {
  children: React.ReactNode
}

const Main = ({ children }: PropTypes) => (
  <S.Main>
    <S.PageContent>{children}</S.PageContent>
  </S.Main>
)

export default Main
