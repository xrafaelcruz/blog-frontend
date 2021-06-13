import { useState } from 'react'

const useToggle = (initialValue = false): [boolean, () => void] => {
  const [value, setState] = useState(initialValue)

  const toggle = () => {
    setState(!value)
  }

  return [value, toggle]
}

export default useToggle
