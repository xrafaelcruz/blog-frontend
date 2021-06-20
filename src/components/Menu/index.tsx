import Link from 'next/link'

import useToggle from 'utils/hooks/toggle'

import Button from './Button'

import * as S from './style'

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

const Menu = () => {
  const [active, toggle] = useToggle()

  return (
    <S.Wrapper>
      <Button onClick={toggle} active={`${active}`} />

      <S.Nav active={`${active}`}>
        {items.map((item, i) => (
          <Link href={item.href} key={i}>
            <a onClick={toggle}>{item.label}</a>
          </Link>
        ))}
      </S.Nav>
    </S.Wrapper>
  )
}

export default Menu
