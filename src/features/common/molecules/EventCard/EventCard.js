import React from 'react'
import {Event} from 'models/event'
import {CommentEventCard} from './CommentEventCard'
import {SubEventCard} from './SubEventCard'

export const EventCard = ({publication: event}) => {
  switch (event.kind) {
    case 'Comment':
      return <CommentEventCard event={event} />
    case 'Sub':
      return <SubEventCard event={event} />
    default:
      return <></>
  }
}

EventCard.propTypes = {
  publication: Event.isRequired,
}
