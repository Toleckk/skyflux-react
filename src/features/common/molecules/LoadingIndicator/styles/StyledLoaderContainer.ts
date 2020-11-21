import styled from 'styled-components'

export const StyledLoaderContainer = styled.div`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  overflow: hidden;
  border: 1px solid rgb(${props => props.theme.secondary});
  background: rgba(${props => props.theme.primaryDark}, 0.7);
  box-shadow: 0 0 1rem rgb(${props => props.theme.secondary});
`
