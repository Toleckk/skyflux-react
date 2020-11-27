import React from 'react'
import {Modal} from '@skyflux/react/ui'
import {StyledContainer} from './styles'
import {Post} from '../../components'

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
