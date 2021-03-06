import React from 'react'
import {Flex} from 'reflexbox/styled-components'
import {useInfiniteScroll} from '@skyflux/react/utils'
import {ListItem, Loader} from '@skyflux/react/ui'
import {StyledList} from './styles'
import {EventCard} from '../EventCard'
import {EventConnectionFragment} from '../../graphql'

export type EventListProps = {
  events: EventConnectionFragment
  onMore?: () => unknown
}

export const EventList: React.FC<EventListProps> = ({events, onMore}) => {
  const ref = useInfiniteScroll({
    fetchMore: onMore,
    hasMore: events.pageInfo.hasNextPage,
  })

  return (
    <StyledList ref={ref}>
      {events.edges.map(({cursor, node}) => (
        <ListItem key={cursor}>
          <EventCard event={node} />
        </ListItem>
      ))}
      {events.pageInfo.hasNextPage && (
        <Flex as="li" width="100%" height="3rem">
          <Loader size="1.5rem" hasShadow={false} borderWidth="3px" />
        </Flex>
      )}
    </StyledList>
  )
}
