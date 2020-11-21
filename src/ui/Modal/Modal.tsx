import React from 'react'
import {useMedia} from 'react-use'
import {DrawerProps} from 'react-pretty-drawer'
import {StyledDrawer} from './styles'

export type ModalProps = Pick<DrawerProps, 'placement' | 'visible' | 'onClose'>

export const Modal: React.FC<ModalProps> = ({
  children,
  visible,
  onClose,
  placement = 'left',
}) => {
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
