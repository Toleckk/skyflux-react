import styled from 'styled-components'

export const TextArea = styled.textarea`
  resize: none;
  width: 100%;

  padding: 0.6rem;

  background: transparent;
  border: 1px solid ${props => props.theme.text1}7F;
  border-radius: 1em;

  line-height: 1.5;
  font-size: 1.125rem;
  color: ${props => props.theme.text2};

  &:focus {
    border-color: ${props => props.theme.text1}B2;
    outline: none;
  }
`
