import styled from 'styled-components'

export const Nickname = styled.span`
  font-size: 1.125rem;
  font-weight: 700;
  color: rgb(${props => props.theme.secondaryText});
  filter: drop-shadow(
    rgba(${props => props.theme.primaryText}, 0.8) 0px 0px 0.4rem
  );
`
