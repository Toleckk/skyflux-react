import styled from 'styled-components'

export const StyledHeader = styled.header`
  position: fixed;
  top: 0;

  background: ${props => props.theme.primaryDark};

  width: 100vw;

  @media (min-width: 768px) {
    width: 55vw;
  }
`
