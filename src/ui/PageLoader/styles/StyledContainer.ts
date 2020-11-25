import styled from 'styled-components'

export const StyledContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${props => props.theme.primaryDark};
`
