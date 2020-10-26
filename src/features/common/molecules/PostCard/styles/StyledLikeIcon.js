import styled from 'styled-components'
import {Icon} from 'ui'

export const StyledLikeIcon = styled(Icon)`
  ${({active, theme}) =>
    active &&
    `filter: drop-shadow(rgb(${theme.secondary}) 0px 0px 3px) contrast(1.5);
  `}
`
