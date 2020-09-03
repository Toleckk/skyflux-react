import React from 'react'
import PropTypes from 'prop-types'
import {PublicationCard} from '../PublicationCard'

export const PublicationList = ({publications, Card, ...props}) => (
  <ul {...props}>
    {publications.map(publication => (
      <li key={publication.cursor}>
        <Card publication={publication.node} />
      </li>
    ))}
  </ul>
)

PublicationList.defaultProps = {
  Card: PublicationCard,
}

PublicationList.propTypes = {
  publications: PropTypes.arrayOf(
    PropTypes.shape({
      node: PublicationCard.propTypes.publication,
      cursor: PropTypes.string.isRequired,
    }),
  ).isRequired,
  Card: PropTypes.elementType,
}
