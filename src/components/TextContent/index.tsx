import * as S from './style'

export type Props = {
  html: string
  className?: string
}

const TextContent = ({ html, className }: Props) => (
  <S.Content className={className} html={html} />
)

export default TextContent
