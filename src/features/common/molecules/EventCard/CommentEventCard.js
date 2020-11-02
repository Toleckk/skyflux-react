import React from 'react'
import PropTypes from 'prop-types'
import {Event} from 'models/event'
import {CommentCard} from '../CommentCard'

export const CommentEventCard = ({event, mini}) => (
  <CommentCard publication={event.subj.comment} mini={mini} />
)

CommentEventCard.defaultProps = {
  mini: false,
}

CommentEventCard.propTypes = {
  event: Event.isRequired,
  mini: PropTypes.bool,
}
