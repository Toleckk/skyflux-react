import styled from 'styled-components'

export const StyledResponsibleContainer = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: space-between;

  margin-bottom: 1rem;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`
