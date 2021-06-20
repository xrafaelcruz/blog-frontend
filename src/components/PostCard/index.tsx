/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef } from 'react'
import Link from 'next/link'

import { PostProps } from 'types/api'
import { formatDate } from 'utils/date'

import * as S from './style'

const mouseMove = (e: any, ref: any) => {
  if (window.innerWidth <= 920) {
    return null
  }

  const box = ref.current
  const boxRect = box.getBoundingClientRect()

  const xPosition = (e.clientX - boxRect.left) / boxRect.width
  const yPosition = (e.clientY - boxRect.top) / boxRect.height - 0.6
  const xOffset = -(xPosition - 0.6)
  const dxNorm = Math.min(Math.max(xOffset, -0.6), 0.6)

  box.style.transform = `perspective(1000px) rotateY(${
    dxNorm * 45
  }deg) rotateX(${yPosition * 45}deg)`
}

const mouseLeave = (ref: any) => {
  if (window.innerWidth <= 920) {
    return null
  }

  const box = ref.current

  box.style.transform = 'none'
}

export type Props = Omit<PostProps, 'content'>

const Card = ({ id, title, createdAt }: Props) => {
  const ref = useRef()

  return (
    <Link href={`/post/${id}`}>
      <a>
        <S.Article
          ref={ref}
          onMouseLeave={() => mouseLeave(ref)}
          onMouseMove={(e: any) => mouseMove(e, ref)}
        >
          <S.Wrapper>
            <S.Title>{title}</S.Title>
          </S.Wrapper>

          <S.Time>{formatDate(createdAt)}</S.Time>
        </S.Article>
      </a>
    </Link>
  )
}

export default Card
