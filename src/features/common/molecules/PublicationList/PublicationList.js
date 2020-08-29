import React from 'react'
import PropTypes from 'prop-types'
import {PostCard} from '../PostCard'
import {PublicationCard} from '../PublicationCard'

export const PublicationList = ({publications, Card, ...props}) => (
  <ul {...props}>
    {publications.map(publication => (
      <li key={publication._id}>
        <Card publication={publication} />
      </li>
    ))}
  </ul>
)

PublicationList.defaultProps = {
  Card: PublicationCard,
}

PublicationList.propTypes = {
  publications: PropTypes.arrayOf(PostCard.propTypes.post).isRequired,
  Card: PropTypes.elementType,
}
