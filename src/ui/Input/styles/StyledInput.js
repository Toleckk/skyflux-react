import styled from 'styled-components'

export const StyledInput = styled.input`
  resize: none;

  margin: 0;
  padding: 0;
  border: 0;

  background: 0;

  width: 100%;

  color: rgb(${props => props.theme.primaryText});

  font-size: 1.125rem;
  line-height: normal;

  &:focus {
    outline: none;
  }
`
