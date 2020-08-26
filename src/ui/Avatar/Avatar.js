import styled from 'styled-components'

export const Avatar = styled.img`
  user-select: none;
  border-radius: 50%;

  border: 2px solid rgb(${props => props.theme.primary});
  box-shadow: 0 0 1rem rgb(${props => props.theme.primary});

  width: 100%;
  height: 100%;
`
