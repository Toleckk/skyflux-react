import styled from 'styled-components'

export const StyledContainer = styled.div`
  box-shadow: 0 0 1rem rgb(${props => props.theme.primary});
  background: rgb(${props => props.theme.primaryDark});

  width: 100vw;
  height: 85vh;

  padding: 1rem;

  @media (min-width: 768px) {
    width: 60vw;
    padding: 2rem;
  }
`
