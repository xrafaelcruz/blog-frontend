import * as S from './style'

export type Props = {
  children: React.ReactNode
  className?: string
}

const PageWrapper = ({ children, className }: Props) => (
  <S.PageWrapper className={className}>{children}</S.PageWrapper>
)

export default PageWrapper
