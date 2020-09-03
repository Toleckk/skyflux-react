import React from 'react'
import {CommentConnectionList} from 'models/comment'
import {CommentCard} from '..'
import {StyledPublicationList} from './styles'

export const CommentList = ({comments}) => (
  <StyledPublicationList publications={comments} Card={CommentCard} />
)

CommentList.propTypes = {
  comments: CommentConnectionList.isRequired,
}
