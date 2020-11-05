import React, {Suspense} from 'react'
import PropTypes from 'prop-types'
import {Event} from 'models/event'
import {Loader} from 'ui'
import {CommentEventCard} from './CommentEventCard'
import {SubEventCard} from './SubEventCard'
import {LikeEventCard} from './LikeEventCard'

export const EventCard = ({publication: event, mini}) => (
  <Suspense fallback={<Loader />}>
    {event.kind === 'Comment' ? (
      <CommentEventCard event={event} mini={mini} />
    ) : event.kind === 'Sub' ? (
      <SubEventCard event={event} mini={mini} />
    ) : event.kind === 'Like' ? (
      <LikeEventCard event={event} mini={mini} />
    ) : (
      <></>
    )}
  </Suspense>
)

EventCard.defaultProps = {
  mini: false,
}

EventCard.propTypes = {
  publication: Event.isRequired,
  mini: PropTypes.bool,
}
