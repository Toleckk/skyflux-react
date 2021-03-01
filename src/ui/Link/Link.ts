import styled from 'styled-components'
import {Link as RouterLink} from 'react-router-dom'

export const Link = styled(RouterLink)`
  color: ${props => props.theme.text2};
  position: relative;

  max-width: 100%;

  display: inline;
  padding-bottom: 3px;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  transition: all 100ms;

  &::after {
    content: '';

    position: absolute;
    bottom: 0;
    left: 0;

    width: 100%;
    height: 1px;

    background: ${props => props.theme.secondary}B2;
    box-shadow: ${props => props.theme.secondary}B2 0 0 1rem 0.05rem;
  }

  &:hover::after,
  &:focus::after {
    background: ${props => props.theme.secondary}E5;
    box-shadow: ${props => props.theme.secondary}E5 0 0 1rem 0.05rem;
  }
`
