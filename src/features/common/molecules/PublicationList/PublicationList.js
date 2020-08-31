import React from 'react'
import PropTypes from 'prop-types'
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
  publications: PropTypes.arrayOf(PublicationCard.propTypes.publication)
    .isRequired,
  Card: PropTypes.elementType,
}
