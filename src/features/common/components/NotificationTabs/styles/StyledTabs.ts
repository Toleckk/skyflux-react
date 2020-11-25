import styled from 'styled-components'

export const StyledTabs = styled.div`
  display: flex;
  flex-direction: column;

  padding: 0.5rem 1rem;

  overflow: hidden;

  background-color: ${props => props.theme.primaryDark};

  width: 85vw;

  @media (min-width: 1366px) {
    width: 50vw;
  }
`
