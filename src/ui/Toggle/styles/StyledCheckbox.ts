import styled from 'styled-components'

export const StyledCheckbox = styled.input.attrs(() => ({type: 'checkbox'}))`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  z-index: 1;
`
