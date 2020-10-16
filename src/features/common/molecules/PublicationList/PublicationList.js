import React, {forwardRef} from 'react'
import PropTypes from 'prop-types'
import {ListItem} from 'ui'
import {MiniUser} from 'models/user'
import {PublicationCard} from '../PublicationCard'

export const PublicationList = forwardRef(
  ({publications, Card, ...props}, ref) => (
    <ul {...props} ref={ref}>
      {publications.map(publication => (
        <ListItem key={publication.cursor}>
          <Card publication={publication.node} />
        </ListItem>
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
      node: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        createdAt: PropTypes.string.isRequired,
        user: MiniUser.isRequired,
      }).isRequired,
      cursor: PropTypes.string.isRequired,
    }),
  ).isRequired,
  Card: PropTypes.elementType,
}
