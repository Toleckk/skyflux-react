import React, {forwardRef} from 'react'
import PropTypes from 'prop-types'
import {CommentConnectionList} from 'models/comment'
import {CommentCard} from '..'
import {StyledPublicationList} from './styles'

export const CommentList = forwardRef(({comments, loading}, ref) => (
  <StyledPublicationList
    publications={comments}
    Card={CommentCard}
    loading={loading}
    ref={ref}
  />
))

CommentList.displayName = 'CommentList'

CommentList.propTypes = {
  comments: CommentConnectionList.isRequired,
  loading: PropTypes.bool.isRequired,
}
