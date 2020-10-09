import React from 'react'
import {Event} from 'models/event'
import {CommentCard} from '../CommentCard'

export const CommentEventCard = ({event}) => (
  <CommentCard publication={event.subj.comment} />
)

CommentEventCard.propTypes = {
  event: Event.isRequired,
}
