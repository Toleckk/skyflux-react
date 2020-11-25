import styled from 'styled-components'

export const BottomBar = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;

  width: 100%;

  box-shadow: 0 0 10px ${props => props.theme.primary};
  background-color: ${props => props.theme.primaryDark};
`
