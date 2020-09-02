import React from 'react'
import PropTypes from 'prop-types'
import {PublicationCard} from '..'

export const CommentCard = ({publication}) => (
  <PublicationCard publication={publication} />
)

CommentCard.propTypes = {
  publication: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    user: PropTypes.shape({
      avatar: PropTypes.string,
      nickname: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
}
