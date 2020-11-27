import React, {useMemo} from 'react'
import {useMediaScreens} from '@skyflux/react/features/shared/hooks'
import {Loader} from '@skyflux/react/ui'
import {useInfiniteScroll} from '@skyflux/react/utils'
import {StyledList, StyledLoaderContainer} from './styles'
import {UserCard} from '../UserCard'
import {UserBadgeConnectionFragment} from '../../graphql'

export type UserListProps = {
  users: UserBadgeConnectionFragment
  mini?: boolean
  onMore?: () => unknown
}

export const UserList: React.FC<UserListProps> = ({users, mini, onMore}) => {
  const {isWide} = useMediaScreens()

  const wideness = isWide ? 4 : 3

  const edges = users.edges
  const hasMore = users.pageInfo?.hasNextPage

  const ref = useInfiniteScroll({fetchMore: onMore, hasMore})

  const displayedUsers = useMemo(
    () => (mini ? edges.slice(0, wideness) : edges),
    [mini, wideness, edges],
  )

  return (
    <StyledList ref={onMore ? ref : undefined}>
      {displayedUsers.map(user => (
        <li key={user.cursor}>
          <UserCard user={user.node} />
        </li>
      ))}
      {!!onMore && hasMore && (
        <StyledLoaderContainer>
          <Loader size="1.5rem" hasShadow={false} borderWidth="3px" />
        </StyledLoaderContainer>
      )}
    </StyledList>
  )
}

UserList.displayName = 'UserList'
