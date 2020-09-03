import React from 'react'
import {Comment} from 'models/comment'
import {PublicationCard} from '..'

export const CommentCard = ({publication}) => (
  <PublicationCard publication={publication} />
)

CommentCard.propTypes = {
  publication: Comment.isRequired,
}
