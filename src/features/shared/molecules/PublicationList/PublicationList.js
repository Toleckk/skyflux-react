import React, {forwardRef, Suspense} from 'react'
import PropTypes from 'prop-types'
import {Flex} from 'reflexbox/styled-components'
import {ListItem, Loader} from 'ui'
import {MiniUser} from 'models/user'
import {PublicationCard} from '../PublicationCard'

export const PublicationList = forwardRef(
  ({publications, Card, loading, onItemDelete, ...props}, ref) => (
    <Suspense fallback={<Loader />}>
      <ul {...props} ref={ref}>
        {publications.map(({cursor, node}) => (
          <ListItem key={cursor}>
            <Card
              publication={node}
              onDelete={onItemDelete && (() => onItemDelete(node))}
            />
          </ListItem>
        ))}
        {loading && (
          <Flex as="li" width="100%" height="3rem">
            <Loader size="1.5rem" hasShadow={false} borderWidth="3px" />
          </Flex>
        )}
      </ul>
    </Suspense>
  ),
)

PublicationList.displayName = 'PublicationList'

PublicationList.defaultProps = {
  Card: PublicationCard,
  loading: false,
  onItemDelete: undefined,
}

PublicationList.propTypes = {
  loading: PropTypes.bool,
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
  onItemDelete: PropTypes.func,
}
