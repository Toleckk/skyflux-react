import styled from 'styled-components'

export const StyledIconContainer = styled.label`
  position: absolute;

  right: 1rem;
  top: 0;

  height: 100%;

  display: flex;
  align-items: center;

  color: rgb(${props => props.theme.primary});
`
