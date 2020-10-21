import styled from 'styled-components'

export const StyledContainer = styled.div`
  width: 60vw;
  height: 85vh;

  padding: 2rem;

  box-shadow: 0 0 1rem rgb(${props => props.theme.primary});
  background: rgb(${props => props.theme.primaryDark});
`
