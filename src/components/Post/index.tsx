import { PostProps } from 'types/api'
import { formatDate } from 'utils/date'

export type PropTypes = Omit<PostProps, 'content'>

const Post = ({ title, createdAt }: PropTypes) => (
  <article>
    <h2>{title}</h2>
    <time>{formatDate(createdAt)}</time>
  </article>
)

export default Post
