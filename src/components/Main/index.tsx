import * as S from './style'

export type MainProps = {
  children: React.ReactNode
}

const Main = ({ children }: MainProps) => (
  <S.Main>
    <S.Content>{children} </S.Content>
  </S.Main>
)

export default Main
