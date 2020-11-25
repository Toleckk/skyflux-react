import styled from 'styled-components'

export const StyledInput = styled.input`
  margin: 0;

  font-size: 1.125rem;

  width: 100%;
  height: 4rem;

  padding: 0 4rem 0 1rem;

  color: ${props => props.theme.primaryText};
  background: none;

  border: 2px solid ${props => props.theme.primaryText};
  border-radius: 2rem;

  &:focus {
    box-shadow: 0 0 1.4rem ${props => props.theme.secondary};
    border-color: ${props => props.theme.secondary};
    outline: none;
  }
`
