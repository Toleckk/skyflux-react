import styled from 'styled-components'

export const StyledContainer = styled.div`
  border: 1px solid rgb(${props => props.theme.secondary});
  box-shadow: 0 0 1rem rgb(${props => props.theme.secondary});

  background: rgb(${props => props.theme.primaryDark});

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 1rem;

  width: 25rem;

  border-radius: 0.5rem;
`
