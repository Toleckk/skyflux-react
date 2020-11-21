import React from 'react'
import {Modal} from 'ui'
import {Post} from '../../organisms'
import {StyledContainer} from './styles'

export type PostModalProps = {
  _id?: string | null
  visible: boolean
  onClose: () => unknown
}

export const PostModal: React.FC<PostModalProps> = ({
  _id,
  visible,
  onClose,
}) => (
  <Modal onClose={onClose} visible={visible && !!_id}>
    <StyledContainer>{_id && <Post _id={_id} />}</StyledContainer>
  </Modal>
)
