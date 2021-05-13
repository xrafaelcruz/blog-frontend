import { AuthorProps } from 'types/api'

import Card from 'components/Card'

import * as S from './style'

const Author = ({ name, photo, content, description }: AuthorProps) => (
  <Card>
    <S.Photo src={photo[0].url} alt={name} aria-hidden="true" />
    <S.Title>{name}</S.Title>
    <S.Description>{description}</S.Description>
    <S.Content html={content} />
  </Card>
)

export default Author
