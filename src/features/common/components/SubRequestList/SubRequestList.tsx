import React from 'react'
import {Loader} from 'ui'
import {useInfiniteScroll} from 'utils'
import {SubRequestCard} from '../SubRequestCard'
import {SubRequestConnectionFragment} from '../../graphql'
import {StyledList, StyledLoaderContainer} from './styles'

export type SubRequestListProps = {
  subs: SubRequestConnectionFragment
  onMore?: () => unknown
}

export const SubRequestList: React.FC<SubRequestListProps> = ({
  subs,
  onMore,
}) => {
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
