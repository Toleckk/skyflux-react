import React, {forwardRef} from 'react'
import {CommentConnectionList} from 'models/comment'
import {CommentCard} from '..'
import {StyledPublicationList} from './styles'

export const CommentList = forwardRef(({comments}, ref) => (
  <StyledPublicationList publications={comments} Card={CommentCard} ref={ref} />
))

CommentList.displayName = 'CommentList'

CommentList.propTypes = {
  comments: CommentConnectionList.isRequired,
}
