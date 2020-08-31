import styled from 'styled-components'
import {Drawer} from 'react-pretty-drawer'

export const StyledDrawer = styled(Drawer)`
  display: flex;
  justify-content: center;

  overflow-y: hidden !important;
  overflow-x: hidden !important;

  @media (min-width: 768px) {
    margin: auto;
  }
`
