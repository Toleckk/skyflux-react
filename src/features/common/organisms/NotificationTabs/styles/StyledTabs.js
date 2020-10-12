import styled from 'styled-components'
import {Tabs} from 'react-tabs'

export const StyledTabs = styled(Tabs)`
  display: flex;
  flex-direction: column;

  padding-right: 1rem;

  overflow: hidden;

  width: 100%;

  @media (min-width: 1366px) {
    width: 50vw;
  }
`
