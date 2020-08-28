import styled from 'styled-components'

export const SecondaryText = styled.span`
  font-weight: normal;

  word-break: break-word;

  color: rgb(${props => props.theme.secondaryText});
`
