import styled from 'styled-components'
import {StyledDivider} from './StyledDivider'

export const StyledTab = styled.button`
  ${props => props.selected && 'flex: 1;'}

  &:not(:first-child) {
    margin-left: 0.5rem;
  }

  & > ${StyledDivider} {
    ${props => !props.selected && 'opacity: 0;'}
  }
`
