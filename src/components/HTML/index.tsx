type Props = {
  html: string
  className?: string
}

const HTML = ({ html, className }: Props) => (
  <div className={className} dangerouslySetInnerHTML={{ __html: html }} />
)

export default HTML
