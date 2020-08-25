import styled from 'styled-components'

export const StyledInput = styled.input`
  margin: 0;
  padding: 0;
  border: 0;
  width: 100%;

  color: rgb(${props => props.theme.primaryText});

  font-size: large;
  line-height: normal;

  &:focus {
    outline: none;
  }
`