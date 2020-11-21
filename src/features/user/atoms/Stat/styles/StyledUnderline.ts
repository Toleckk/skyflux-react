import styled from 'styled-components'
import {StyledFilter} from './StyledFilter'

export const StyledUnderline = styled.hr`
  border: 0;
  margin: 0;

  height: 1px;
  width: 100%;

  background: rgb(${props => props.theme.secondary});
  box-shadow: rgb(${props => props.theme.secondary}) 0 0 6px;

  transform: scaleX(0);

  ${StyledFilter}:hover & {
    transform: scaleX(1);
  }
`
