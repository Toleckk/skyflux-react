import styled from 'styled-components'

export const BottomBar = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;

  width: 100%;

  padding: 5px 0;

  box-shadow: 0 0 10px rgb(${props => props.theme.primary});
`
