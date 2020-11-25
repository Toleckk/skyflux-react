import styled from 'styled-components'

export const StyledLoaderContainer = styled.div`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  overflow: hidden;
  border: 1px solid ${props => props.theme.secondary};
  background: ${props => props.theme.primaryDark}B2;
  box-shadow: 0 0 1rem ${props => props.theme.secondary};
`
