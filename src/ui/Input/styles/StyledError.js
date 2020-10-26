import styled from 'styled-components'

export const StyledError = styled.span`
  position: absolute;
  top: calc(100% + 3px);
  padding-left: 2px;

  font-size: 0.75rem;

  color: rgb(${props => props.theme.errorText});
  border-left: 4px solid rgb(${props => props.theme.secondary});
`
