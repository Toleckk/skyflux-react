import React from 'react'
import PropTypes from 'prop-types'
import {Modal} from '../Modal'
import {StyledContainer} from './styles'

export const ConfirmDialog = ({children, ...props}) => (
  <Modal {...props} placement="bottom">
    <StyledContainer>{children}</StyledContainer>
  </Modal>
)

ConfirmDialog.propTypes = {
  children: PropTypes.node,
}
