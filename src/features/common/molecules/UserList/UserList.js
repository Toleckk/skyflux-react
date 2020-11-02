import React, {forwardRef, useMemo} from 'react'
import PropTypes from 'prop-types'
import {useMediaScreens} from 'features/common/hooks'
import {MiniUserConnectionList} from 'models/user'
import {Loader} from 'ui'
import {UserCard} from '../UserCard'
import {StyledList, StyledLoaderContainer} from './styles'

export const UserList = forwardRef(({users, mini, loading}, ref) => {
  const {isWide} = useMediaScreens()

  const wideness = isWide ? 4 : 3

  const displayedUsers = useMemo(
    () => (mini ? users.slice(0, wideness) : users),
    [mini, wideness, users],
  )

  return (
    <StyledList ref={ref}>
      {displayedUsers.map(user => (
        <li key={user.cursor}>
          <UserCard user={user.node} />
        </li>
      ))}
      {loading && (
        <StyledLoaderContainer>
          <Loader size="1.5rem" hasShadow={false} borderWidth="3px" />
        </StyledLoaderContainer>
      )}
    </StyledList>
  )
})

UserList.displayName = 'UserList'

UserList.defaultProps = {
  mini: false,
  loading: false,
}

UserList.propTypes = {
  users: MiniUserConnectionList.isRequired,
  mini: PropTypes.bool,
  loading: PropTypes.bool,
}
