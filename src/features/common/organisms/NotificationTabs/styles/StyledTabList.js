import styled from 'styled-components'
import {TabList} from 'react-tabs'
import {StyledDivider} from './StyledDivider'

export const StyledTabList = styled(TabList)`
  display: flex;
  justify-content: space-between;

  & .react-tabs__tab:not(:first-child) {
    margin-left: 0.5rem;
  }

  & .react-tabs__tab--selected {
    flex: 1;
  }

  & ${StyledDivider} {
    display: none;
  }

  & .react-tabs__tab--selected > ${StyledDivider} {
    display: block;
  }
`
