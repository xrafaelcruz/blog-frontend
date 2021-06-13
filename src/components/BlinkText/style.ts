import styled, { keyframes } from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 0 40px;
  width: 100%;

  @media (max-width: 640px) {
    display: none;
  }
`

const blinkCursor = keyframes`
  from {
    border-color: rgba(255, 255, 255, 0.75);
  }

  to {
    border-color: transparent;
  }
`

const typing = keyframes`
  from {
    width: 0;
  }

  to {
    width: 55rem;
  }
`

export const Text = styled.h1`
  align-self: center;
  animation: ${blinkCursor} 500ms steps(40) infinite normal,
    ${typing} 4s steps(40) 1s normal both;
  border-right: 2px solid rgba(255, 255, 255, 0.75);
  display: inline-block;
  justify-content: center;
  margin: 1rem auto;
  overflow: hidden;
  white-space: nowrap;
  text-align: center;

  @media (max-width: 640px) {
    animation: none;
  }
`
