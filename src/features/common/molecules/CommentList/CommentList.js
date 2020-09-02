import React from 'react'
import PropTypes from 'prop-types'
import {CommentCard} from '..'
import {StyledPublicationList} from './styles'

export const CommentList = ({comments}) => (
  <StyledPublicationList publications={comments} Card={CommentCard} />
)

CommentList.propTypes = {
  comments: PropTypes.arrayOf(CommentCard.propTypes.publication).isRequired,
}
