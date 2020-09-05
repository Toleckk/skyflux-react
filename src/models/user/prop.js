import PropTypes from 'prop-types'

export const ID = PropTypes.string

export const Description = PropTypes.shape({
  about: PropTypes.string,
  birthday: PropTypes.string,
  from: PropTypes.string,
})

export const User = PropTypes.shape({
  _id: ID.isRequired,
  nickname: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  postsCount: PropTypes.number.isRequired,
  subscriptionsCount: PropTypes.number.isRequired,
  subscribersCount: PropTypes.number.isRequired,
  amISubscribed: PropTypes.bool.isRequired,
  isPrivate: PropTypes.bool.isRequired,
  description: Description.isRequired,
})

export const MiniUser = PropTypes.shape({
  _id: ID.isRequired,
  nickname: PropTypes.string.isRequired,
  avatar: PropTypes.string,
})

export const MiniUserList = PropTypes.arrayOf(MiniUser.isRequired)

export const UserPageInfo = PropTypes.shape({
  hasNextPage: PropTypes.bool.isRequired,
  hasPreviousPage: PropTypes.bool.isRequired,
  startCursor: ID,
  endCursor: ID,
})

export const MiniUserConnectionList = PropTypes.arrayOf(
  PropTypes.shape({
    node: MiniUser.isRequired,
    cursor: ID.isRequired,
  }).isRequired,
)

export const MiniUserConnection = PropTypes.shape({
  pageInfo: UserPageInfo.isRequired,
  edges: MiniUserConnectionList.isRequired,
})

export const UserConnection = PropTypes.shape({
  pageInfo: UserPageInfo.isRequired,
  edges: PropTypes.arrayOf(
    PropTypes.shape({
      node: User.isRequired,
      cursor: ID.isRequired,
    }).isRequired,
  ).isRequired,
})
