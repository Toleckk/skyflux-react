import styled from 'styled-components'

export const StyledContainer = styled.div`
  display: block;
  position: relative;

  user-select: none;
  border-radius: 50%;

  overflow: hidden;

  border: 2px solid rgb(${props => props.theme.primary});
  box-shadow: 0 0 1rem rgb(${props => props.theme.primary});

  width: 100%;
  height: 100%;
`
