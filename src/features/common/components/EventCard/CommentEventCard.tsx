import React from 'react'
import {CommentCard} from 'features/shared/components/CommentCard'
import {CommentEventBodyFragment, EventFragment} from '../../graphql'

export type CommentEventCardProps = {
  event: EventFragment & {subj: CommentEventBodyFragment}
  mini?: boolean
}

export const CommentEventCard: React.FC<CommentEventCardProps> = ({
  event,
  mini,
}) => <CommentCard comment={event.subj.comment} mini={mini} />
