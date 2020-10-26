import styled from 'styled-components'

export const StyledList = styled.ul`
  overflow-y: auto;
  width: 100%;
  max-height: 100%;
  padding: 0 1rem;

  display: grid;
  grid-row-gap: 1rem;
  justify-content: space-between;

  grid-template-columns: repeat(2, 48%);

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 30%);
  }

  @media (min-width: 1366px) {
    grid-template-columns: repeat(4, 23%);
  }
`
