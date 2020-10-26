import React from 'react'
import PropTypes from 'prop-types'
import noop from 'noop6'
import {useMedia} from 'react-use'
import {StyledDrawer} from './styles'

export const Modal = ({placement, children, visible, onClose}) => {
  const isDesktop = useMedia('(min-width: 768px)')
  const props = isDesktop
    ? {width: 'auto', height: 'auto'}
    : placement === 'right' || placement === 'left'
    ? {width: 'auto'}
    : {height: 'auto'}

  return (
    <StyledDrawer
      placement={placement}
      visible={visible}
      onClose={onClose}
      {...props}
    >
      {children}
    </StyledDrawer>
  )
}

Modal.defaultProps = {
  placement: 'bottom',
  onClose: noop,
  visible: false,
  children: null,
}

Modal.propTypes = {
  placement: PropTypes.oneOf(['bottom', 'top', 'left', 'right']),
  onClose: PropTypes.func,
  visible: PropTypes.bool,
  children: PropTypes.node,
}
