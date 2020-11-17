import PropTypes from 'prop-types'
import {MiniUser} from 'models/user'

export const SubRequest = PropTypes.shape({
  _id: PropTypes.string.isRequired,
  from: MiniUser.isRequired,
  accepted: PropTypes.bool.isRequired,
})

export const SubConnectionList = PropTypes.arrayOf(
  PropTypes.shape({
    cursor: PropTypes.string.isRequired,
    node: SubRequest.isRequired,
  }).isRequired,
)

export const SubPageInfo = PropTypes.shape({
  hasNextPage: PropTypes.bool.isRequired,
  endCursor: PropTypes.string,
  hasPreviousPage: PropTypes.bool.isRequired,
  startCursor: PropTypes.string,
})

export const SubConnection = PropTypes.shape({
  edges: SubConnectionList.isRequired,
  pageInfo: SubPageInfo.isRequired,
})
