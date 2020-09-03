import styled from 'styled-components'

export const StyledList = styled.ul`
  display: grid;
  grid-template-columns: min-content min-content min-content;
  justify-content: space-between;
  grid-gap: 1rem;

  @media (min-width: 1366px) {
    grid-template-columns: min-content min-content min-content min-content;
  }
`
