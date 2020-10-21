import styled from 'styled-components'
import {TabPanel} from 'react-tabs'

export const StyledTabPanel = styled(TabPanel)`
  overflow-y: hidden;

  &.react-tabs__tab-panel--selected {
    flex: 1;
  }
`
