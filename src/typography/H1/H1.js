import styled from 'styled-components'

export const H1 = styled.h1`
  color: rgb(${props => props.theme.primaryText});

  font-size: 1.5rem;
  font-weight: normal;

  text-align: ${props => (props.center ? 'center' : 'initial')};
`
