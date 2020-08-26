import styled from 'styled-components'

export const StyledContainer = styled.div`
  display: flex;

  padding: 1rem 0;

  border-radius: 1rem;
  border: 1px solid transparent;

  &:hover {
    border-color: rgb(${props => props.theme.primary});
    box-shadow: 0 0 10px rgb(${props => props.theme.primary});
  }
`
