import React, {forwardRef, useMemo} from 'react'
import PropTypes from 'prop-types'
import {useMediaScreens} from 'features/common/hooks'
import {MiniUserConnectionList} from 'models/user'
import {UserCard} from '../UserCard'
import {StyledList} from './styles'

export const UserList = forwardRef(({users, mini}, ref) => {
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
    </StyledList>
  )
})

UserList.displayName = 'UserList'

UserList.defaultProps = {
  mini: false,
}

UserList.propTypes = {
  users: MiniUserConnectionList.isRequired,
  mini: PropTypes.bool,
}
