import styled from 'styled-components'
import {Link} from '../../../../../ui/Link'

export const StyledLink = styled(Link)`
  color: rgb(${props => props.theme.primaryText});
  min-width: 120px;
  position: relative;

  transition: all 100ms;

  white-space: nowrap;

  &::after {
    content: '';

    position: absolute;
    bottom: -1px;
    left: 0;

    width: 100%;
    height: 1px;

    background: rgba(${props => props.theme.secondary}, 0.7);
    box-shadow: rgba(${props => props.theme.secondary}, 0.7) 0 0 1rem 0.05rem;
  }

  &:hover::after,
  &:focus::after {
    background: rgba(${props => props.theme.secondary}, 0.9);
    box-shadow: rgba(${props => props.theme.secondary}, 0.9) 0 0 1rem 0.05rem;
  }
`
