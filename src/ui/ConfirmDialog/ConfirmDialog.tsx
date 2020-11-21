import React from 'react'
import {Text} from 'typography'
import {Icon, IconProps, Modal} from '..'
import {StyledButton, StyledContainer} from './styles'

export type ConfirmDialogProps = {
  text: string
  icon: IconProps['icon']
  onSubmit: () => unknown
  onCancel: () => any
  visible: boolean
}

export const ConfirmDialog: React.FC<ConfirmDialogProps> = ({
  children,
  text,
  icon,
  onSubmit,
  onCancel,
  visible,
  ...props
}) => (
  <Modal {...props} visible={visible} onClose={onCancel} placement="bottom">
    <StyledContainer>
      <Text>{text}</Text>
      {children}
      <StyledButton onClick={onSubmit}>
        <Icon icon={icon} size="2rem" />
      </StyledButton>
    </StyledContainer>
  </Modal>
)
