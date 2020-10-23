import React from 'react'
import PropTypes from 'prop-types'
import {Icon} from '../Icon'
import {StyledContainer} from './styles'

export const Avatar = ({src, children, ...props}) => (
  <StyledContainer {...props}>
    {src ? (
      <img src={src} alt="avatar" width="100%" height="100%" />
    ) : (
      <Icon icon="birthday" size="100%" />
    )}
    {children}
  </StyledContainer>
)

Avatar.propTypes = {
  src: PropTypes.string,
  children: PropTypes.node,
}
