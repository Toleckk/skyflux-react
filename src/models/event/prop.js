import PropTypes from 'prop-types'
import {MiniUser} from 'models/user'
import {ID} from 'models/post'

export const Event = PropTypes.shape({
  user: MiniUser.isRequired,
})

export const EventPageInfo = PropTypes.shape({
  hasNextPage: PropTypes.bool.isRequired,
  hasPreviousPage: PropTypes.bool.isRequired,
  startCursor: ID.isRequired,
  endCursor: ID.isRequired,
})

export const EventConnectionList = PropTypes.arrayOf(
  PropTypes.shape({
    cursor: ID.isRequired,
    node: Event.isRequired,
  }).isRequired,
)

export const EventConnection = PropTypes.shape({
  pageInfo: EventPageInfo.isRequired,
  edges: EventConnectionList.isRequired,
})
