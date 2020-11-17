import React from 'react'
import PropTypes from 'prop-types'
import {ID} from 'models/post'
import {Modal} from 'ui'
import {Post} from '../../organisms'
import {StyledContainer} from './styles'

export const PostModal = ({_id, visible, onClose}) => (
  <Modal onClose={onClose} visible={visible && _id}>
    <StyledContainer>{_id && <Post _id={_id} />}</StyledContainer>
  </Modal>
)

PostModal.propTypes = {
  _id: ID,
  visible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
}
