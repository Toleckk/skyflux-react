import styled from 'styled-components'

export const SecondaryText = styled.span`
  font-weight: normal;
  font-size: 1em;

  word-break: break-word;

  color: rgb(${props => props.theme.secondaryText});
`
