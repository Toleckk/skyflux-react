import styled from 'styled-components'

export type StyledInputProps = {
  type: 'password' | 'text'
}

export const StyledInput = styled.input<StyledInputProps>`
  resize: none;

  margin: 0;
  padding: 0;
  border: 0;

  background: 0;

  width: 100%;

  color: ${props => props.theme.primaryText};

  font-size: 1.125rem;
  line-height: normal;

  &:focus {
    outline: none;
  }
`
