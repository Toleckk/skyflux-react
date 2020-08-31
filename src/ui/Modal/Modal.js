import React from 'react'
import PropTypes from 'prop-types'
import {useMedia} from 'react-use'
import {StyledDrawer} from './styles'

export const Modal = ({placement, children, visible}) => {
  const isDesktop = useMedia('(min-width: 768px)')
  const props = isDesktop ? {width: 'auto', height: 'auto'} : {}

  return (
    <StyledDrawer placement={placement} visible={visible} {...props}>
      {children}
    </StyledDrawer>
  )
}

Modal.defaultProps = {
  placement: 'bottom',
  visible: false,
  children: null,
}

Modal.propTypes = {
  placement: PropTypes.oneOf(['bottom', 'top', 'left', 'right']),
  visible: PropTypes.bool,
  children: PropTypes.node,
}
