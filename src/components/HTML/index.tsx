type PropTypes = {
  html: string
  className?: string
}

const HTML = ({ html, className }: PropTypes) => (
  <div className={className} dangerouslySetInnerHTML={{ __html: html }} />
)

export default HTML
