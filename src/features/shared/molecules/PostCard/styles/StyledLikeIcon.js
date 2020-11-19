import styled from 'styled-components'
import PropTypes from 'prop-types'
import {Icon} from 'ui'

export const StyledLikeIcon = styled(Icon)`
  ${({$isActive, theme}) =>
    $isActive &&
    `filter: drop-shadow(rgb(${theme.secondary}) 0px 0px 3px) contrast(1.5);
  `}
`

StyledLikeIcon.defaultProps = {
  $isActive: false,
}

StyledLikeIcon.propTypes = {
  $isActive: PropTypes.bool,
}
