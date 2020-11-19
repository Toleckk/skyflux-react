import PropTypes from 'prop-types'
import {MiniUser} from 'models/user'

export const ID = PropTypes.string

export const Comment = PropTypes.shape({
  _id: ID.isRequired,
  text: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  user: MiniUser.isRequired,
  post: PropTypes.shape({
    _id: PropTypes.string,
    user: MiniUser.isRequired,
    text: PropTypes.string,
  }).isRequired,
})

export const CommentPage = PropTypes.shape({
  hasNextPage: PropTypes.bool,
  hasPreviousPage: PropTypes.bool,
  startCursor: ID.isRequired,
  endCursor: ID.isRequired,
})

export const CommentConnectionList = PropTypes.arrayOf(
  PropTypes.shape({
    cursor: ID.isRequired,
    node: Comment.isRequired,
  }).isRequired,
)

export const CommentConnection = PropTypes.shape({
  pageInfo: CommentPage.isRequired,
  edges: CommentConnectionList.isRequired,
})
