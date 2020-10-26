import styled from 'styled-components'

export const StyledResponsibleGrid = styled.div`
  width: 90%;

  display: grid;
  grid-row-gap: 1rem;
  grid-column-gap: 2rem;

  grid-template-columns: 100%;

  @media (min-width: 768px) {
    grid-template-columns: 3fr 2fr;
  }
`
