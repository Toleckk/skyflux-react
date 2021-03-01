import styled from 'styled-components'

export const StyledRelativeContainer = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 2rem;

  background: ${props => props.theme.background};

  width: 70vw;
`
