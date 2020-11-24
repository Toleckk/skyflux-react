import styled, {css} from 'styled-components'
import {Link} from 'react-router-dom'

const activeStyle = css`
  filter: drop-shadow(0px 0px 6px rgb(${props => props.theme.secondary}));
`

export type StyledLinkProps = {
  $isActive?: boolean
}

export const StyledLink = styled(Link)<StyledLinkProps>`
  width: 100%;
  height: 100%;

  &:hover {
    ${activeStyle}
  }

  ${props => !!props.$isActive && activeStyle}
`
