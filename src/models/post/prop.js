import PropTypes from 'prop-types'
import {MiniUser} from 'models/user'

export const ID = PropTypes.string

export const Post = PropTypes.shape({
  _id: ID.isRequired,
  text: PropTypes.string.isRequired,
  likesCount: PropTypes.number.isRequired,
  commentsCount: PropTypes.number.isRequired,
  createdAt: PropTypes.string.isRequired,
  isLikedByMe: PropTypes.bool.isRequired,
  user: MiniUser.isRequired,
})

export const PostPageInfo = PropTypes.shape({
  hasNextPage: PropTypes.bool.isRequired,
  hasPreviousPage: PropTypes.bool.isRequired,
  startCursor: ID.isRequired,
  endCursor: ID.isRequired,
})

export const PostConnectionList = PropTypes.arrayOf(
  PropTypes.shape({
    cursor: ID.isRequired,
    node: Post.isRequired,
  }).isRequired,
)

export const PostConnection = PropTypes.shape({
  pageInfo: PostPageInfo.isRequired,
  edges: PostConnectionList.isRequired,
})
