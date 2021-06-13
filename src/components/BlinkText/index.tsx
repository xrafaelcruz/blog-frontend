import * as S from './style'

export type Props = {
  children: string
}

const BlinkText = ({ children }: Props) => (
  <S.Wrapper>
    <S.Text>{children}</S.Text>
  </S.Wrapper>
)

export default BlinkText
