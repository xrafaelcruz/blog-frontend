import Link from 'next/link'

import * as S from './style'

export type Props = {
  onClick: () => void
  active: string
}

const items = [
  {
    label: 'Home',
    href: '/'
  },
  {
    label: 'Sobre',
    href: '/sobre'
  }
]

const Menu = ({ onClick, active }: Props) => (
  <S.Nav active={`${active}`}>
    {items.map((item, i) => (
      <Link href={item.href} key={i}>
        <a onClick={onClick}>{item.label}</a>
      </Link>
    ))}
  </S.Nav>
)

export default Menu
