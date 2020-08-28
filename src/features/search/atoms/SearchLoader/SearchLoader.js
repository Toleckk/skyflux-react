import styled, {keyframes} from 'styled-components'
import {Icon} from '../../../../ui'

const animation = keyframes`
  50% {
    filter: hue-rotate(180deg);
  }
  
  100% {
    filter: hue-rotate(360deg);
  }
`

export const SearchLoader = styled(Icon).attrs(() => ({icon: 'find'}))`
  height: 40vh;
  width: auto;
  margin: auto;

  filter: hue-rotate(0);

  animation: infinite 4s linear ${animation};
`
