import PropTypes from 'prop-types'
import {Comment} from 'models/comment'
import {SubRequest} from 'models/sub'

export const SubEventBody = PropTypes.shape({
  sub: SubRequest.isRequired,
})

export const CommentEventBody = PropTypes.shape({
  comment: Comment.isRequired,
})

export const Event = PropTypes.shape({
  kind: PropTypes.string,
  subj: PropTypes.oneOfType([SubEventBody, CommentEventBody]),
})

export const EventPageInfo = PropTypes.shape({
  hasNextPage: PropTypes.bool.isRequired,
  hasPreviousPage: PropTypes.bool.isRequired,
  startCursor: PropTypes.string.isRequired,
  endCursor: PropTypes.string.isRequired,
})

export const EventConnectionList = PropTypes.arrayOf(
  PropTypes.shape({
    cursor: PropTypes.string.isRequired,
    node: Event.isRequired,
  }).isRequired,
)

export const EventConnection = PropTypes.shape({
  pageInfo: EventPageInfo.isRequired,
  edges: EventConnectionList.isRequired,
})
