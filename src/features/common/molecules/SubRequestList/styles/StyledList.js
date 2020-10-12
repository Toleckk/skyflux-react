import styled from 'styled-components'

export const StyledList = styled.ul`
  overflow-y: auto;
  width: 100%;
  max-height: 100%;
  padding: 0 1rem;

  display: grid;
  grid-template-columns: repeat(3, 30%);
  grid-row-gap: 1rem;
  justify-content: space-between;

  @media (min-width: 1366px) {
    grid-template-columns: repeat(4, 23%);
  }
`
