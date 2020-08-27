import styled from 'styled-components'

export const TextArea = styled.textarea`
  resize: none;
  width: 100%;

  padding: 10px;

  background: transparent;
  border: 1px solid rgba(${props => props.theme.secondaryText}, 0.5);
  border-radius: 1em;

  line-height: 1.5;
  font-size: large;
  color: rgb(${props => props.theme.primaryText});

  &:focus {
    border-color: rgba(${props => props.theme.secondaryText}, 0.7);
    outline: none;
  }
`