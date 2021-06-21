import * as S from './style'

export type Props = {
  onClick: () => void
  active: boolean
}

const Button = ({ onClick, active }: Props) => (
  <S.Button
    onClick={onClick}
    active={`${active}`}
    type="button"
    aria-label="Botão abrir e fechar menu"
  >
    <S.Line />
    <S.Line />
    <S.Line />
  </S.Button>
)

export default Button
