import React, {Suspense} from 'react'
import {Loader} from '@skyflux/react/ui'
import {CommentEventCard} from './CommentEventCard'
import {SubEventCard} from './SubEventCard'
import {LikeEventCard} from './LikeEventCard'
import {
  CommentEventBodyFragment,
  EventFragment,
  LikeEventBodyFragment,
  SubEventBodyFragment,
} from '../../graphql'

export type EventCardProps = {
  event: EventFragment
  mini?: boolean
}

export const EventCard: React.FC<EventCardProps> = ({event, mini}) => (
  <Suspense fallback={<Loader />}>
    {isCommentEvent(event) ? (
      <CommentEventCard event={event} mini={mini} />
    ) : isSubEvent(event) ? (
      <SubEventCard event={event} mini={mini} />
    ) : isLikeEvent(event) ? (
      <LikeEventCard event={event} mini={mini} />
    ) : (
      <></>
    )}
  </Suspense>
)

export const isCommentEvent = (
  event: EventFragment,
): event is EventFragment & {subj: CommentEventBodyFragment} =>
  event.kind === 'Comment'

export const isSubEvent = (
  event: EventFragment,
): event is EventFragment & {subj: SubEventBodyFragment} => event.kind === 'Sub'

export const isLikeEvent = (
  event: EventFragment,
): event is EventFragment & {subj: LikeEventBodyFragment} =>
  event.kind === 'Like'
