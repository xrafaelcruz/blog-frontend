import * as S from './style'

export type PropTypes = {
  className?: string
  children: React.ReactNode
}

const Card = ({ className, children }: PropTypes) => (
  <S.Article className={className}>{children}</S.Article>
)

export default Card
