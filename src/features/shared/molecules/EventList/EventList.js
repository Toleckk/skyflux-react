import React from 'react'
import PropTypes from 'prop-types'
import {Flex} from 'reflexbox/styled-components'
import {useInfiniteScroll} from 'utils'
import {ListItem, Loader} from 'ui'
import {EventConnection} from 'models/event'
import {EventCard} from '../EventCard'
import {StyledList} from './styles'

export const EventList = ({events, onMore}) => {
  const ref = useInfiniteScroll({
    fetchMore: onMore,
    hasMore: events.pageInfo.hasNextPage,
  })

  return (
    <StyledList ref={ref}>
      {events.edges.map(({cursor, node}) => (
        <ListItem key={cursor}>
          <EventCard publication={node} />
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

EventList.propTypes = {
  events: EventConnection.isRequired,
  onMore: PropTypes.func,
}
