import React from 'react'
import PropTypes from 'prop-types'
import {Icon, Modal, Text} from '..'
import {StyledButton, StyledContainer} from './styles'

export const ConfirmDialog = ({
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

ConfirmDialog.propTypes = {
  children: PropTypes.node,
  text: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired,
}
