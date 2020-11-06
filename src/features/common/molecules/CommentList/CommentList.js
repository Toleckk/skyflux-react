import React, {forwardRef} from 'react'
import PropTypes from 'prop-types'
import {CommentConnectionList} from 'models/comment'
import {CommentCard} from '..'
import {StyledPublicationList} from './styles'

export const CommentList = forwardRef(
  ({comments, loading, onCommentDelete}, ref) => (
    <StyledPublicationList
      publications={comments}
      Card={CommentCard}
      loading={loading}
      onItemDelete={onCommentDelete}
      ref={ref}
    />
  ),
)

CommentList.displayName = 'CommentList'

CommentList.defaultProps = {
  onCommentDelete: null,
}

CommentList.propTypes = {
  comments: CommentConnectionList.isRequired,
  loading: PropTypes.bool.isRequired,
  onCommentDelete: PropTypes.func,
}
