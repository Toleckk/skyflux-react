import React from 'react'
import PropTypes from 'prop-types'
import {SubConnection} from 'models/sub'
import {Loader} from 'ui'
import {useInfiniteScroll} from 'utils'
import {SubRequestCard} from '../SubRequestCard'
import {StyledList, StyledLoaderContainer} from './styles'

export const SubRequestList = ({subs, onMore}) => {
  const edges = subs.edges
  const hasMore = subs.pageInfo.hasNextPage

  const ref = useInfiniteScroll({fetchMore: onMore, hasMore})

  return (
    <StyledList ref={ref}>
      {edges.map(sub => (
        <li key={sub.cursor}>
          <SubRequestCard sub={sub.node} />
        </li>
      ))}
      {hasMore && onMore && (
        <StyledLoaderContainer>
          <Loader size="1.5rem" hasShadow={false} borderWidth="3px" />
        </StyledLoaderContainer>
      )}
    </StyledList>
  )
}

SubRequestList.propTypes = {
  subs: SubConnection.isRequired,
  onMore: PropTypes.func,
}
