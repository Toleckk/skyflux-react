import React, {forwardRef, Suspense} from 'react'
import {Flex} from 'reflexbox/styled-components'
import {ListItem, Loader} from '@skyflux/react/ui'
import {PublicationCard} from '../PublicationCard'

export type PublicationListProps = {
  publications: any[]
  Card?: React.FC<{publication: any; onDelete: any}>
  loading?: boolean
  onItemDelete: (node: any) => void
}

/** @deprecated */
// eslint-disable-next-line react/display-name
export const PublicationList: React.FC<PublicationListProps> = forwardRef<
  HTMLUListElement,
  PublicationListProps
>(
  (
    {publications, Card = PublicationCard, loading, onItemDelete, ...props},
    ref,
  ) => (
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
) as React.FC<PublicationListProps>

PublicationList.displayName = 'PublicationList'
