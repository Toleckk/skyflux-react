import styled from 'styled-components'

export const StyledAuthFormContainer = styled.div`
  background: rgb(${props => props.theme.primaryDark});

  padding: 3rem 1rem;
  width: 100%;

  border-top-left-radius: 1.5rem;
  border-top-right-radius: 1.5rem;

  border-style: solid;
  border-color: rgb(${props => props.theme.secondary});
  box-shadow: 0 0 1rem rgb(${props => props.theme.secondary});

  border-width: 0;
  border-top-width: 1px;
`
