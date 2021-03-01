import styled from 'styled-components'

export const Nickname = styled.span`
  font-size: 1.125em;
  font-weight: 700;
  color: ${props => props.theme.text1};
  filter: drop-shadow(${props => props.theme.text2}CC 0px 0px 0.4rem);
`
