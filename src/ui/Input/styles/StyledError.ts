import styled from 'styled-components'

export const StyledError = styled.span`
  position: absolute;
  top: calc(100% + 3px);
  padding-left: 2px;

  font-size: 0.75rem;

  color: ${props => props.theme.error1};
  border-left: 4px solid ${props => props.theme.secondary};
`
