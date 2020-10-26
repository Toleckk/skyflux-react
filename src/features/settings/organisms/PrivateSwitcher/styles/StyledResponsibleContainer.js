import styled from 'styled-components'

export const StyledResponsibleContainer = styled.div`
  display: flex;
  align-items: center;

  justify-content: space-between;

  @media (min-width: 768px) {
    justify-content: initial;
  }
`
