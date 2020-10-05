import PropTypes from 'prop-types'
import {MiniUser} from 'models/user'

export const SubRequest = PropTypes.shape({
  _id: PropTypes.string.isRequired,
  from: MiniUser,
})

export const SubConnectionList = PropTypes.arrayOf(
  PropTypes.shape({
    cursor: PropTypes.string.isRequired,
    node: SubRequest.isRequired,
  }).isRequired,
)
