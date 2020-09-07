import React, {forwardRef} from 'react'
import PropTypes from 'prop-types'
import {PublicationCard} from '../PublicationCard'

export const PublicationList = forwardRef(
  ({publications, Card, ...props}, ref) => (
    <ul {...props} ref={ref}>
      {publications.map(publication => (
        <li key={publication.cursor}>
          <Card publication={publication.node} />
        </li>
      ))}
    </ul>
  ),
)

PublicationList.displayName = 'PublicationList'

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
