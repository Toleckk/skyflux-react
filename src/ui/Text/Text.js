import styled from 'styled-components'

export const Text = styled.span`
  text-align: center;
  font-weight: normal;
  font-size: medium;

  color: rgb(${props => props.theme.primaryText});
`