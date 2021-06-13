import * as S from './style'

export type PropTypes = {
  onClick: () => void
  active: string
}

const Button = ({ onClick, active }: PropTypes) => (
  <S.Button onClick={onClick} active={active} type="button">
    <S.Line />
    <S.Line />
    <S.Line />
  </S.Button>
)

export default Button
