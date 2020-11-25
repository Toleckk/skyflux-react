import styled from 'styled-components'
import {StyledContainer} from './StyledContainer'

export const StyledDivider = styled.div`
  position: relative;

  bottom: 0;
  left: 0;

  width: 100%;
  height: 1px;

  background: ${props => props.theme.primary}99;

  &:after {
    content: '';

    position: absolute;
    top: 0;
    left: 0;

    height: 1px;
    width: 100%;

    transform: scale(0);
    background: ${props => props.theme.primary};
  }

  ${StyledContainer}:hover > &::after {
    transform: scale(1);
  }
`
