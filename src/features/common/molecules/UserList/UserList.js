import React, {useMemo} from 'react'
import PropTypes from 'prop-types'
import {useMediaScreens} from 'features/common/hooks'
import {MiniUserConnection} from 'models/user'
import {Loader} from 'ui'
import {useInfiniteScroll} from 'utils'
import {UserCard} from '../UserCard'
import {StyledList, StyledLoaderContainer} from './styles'

export const UserList = ({users, mini, onMore}) => {
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

UserList.defaultProps = {
  mini: false,
}

UserList.propTypes = {
  users: MiniUserConnection.isRequired,
  mini: PropTypes.bool,
  onMore: PropTypes.func,
}
