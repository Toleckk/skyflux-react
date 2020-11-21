import styled from 'styled-components'
import {Icon} from 'ui'

export type StyledLikeIconProps = {
  $isActive?: boolean
}

export const StyledLikeIcon = styled(Icon)<StyledLikeIconProps>`
  ${({$isActive, theme}) =>
    $isActive &&
    `filter: drop-shadow(rgb(${theme.secondary}) 0px 0px 3px) contrast(1.5);
  `}
`
