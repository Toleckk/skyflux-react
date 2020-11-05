import PropTypes from 'prop-types'
import {MiniUser} from 'models/user'
import {ID} from 'models/post'

export const Like = PropTypes.shape({
  _id: ID,
  user: MiniUser.isRequired,
  post: PropTypes.shape({
    _id: ID.isRequired,
    text: PropTypes.string.isRequired,
  }),
})
