import React, {useMemo} from 'react'
import PropTypes from 'prop-types'
import {useMediaScreens} from 'features/common/hooks'
import {MiniUserConnectionList} from 'models/user'
import {UserCard} from '../UserCard'
import {StyledList} from './styles'

export const UserList = ({users, mini}) => {
  const {isWide} = useMediaScreens()

  const wideness = isWide ? 4 : 3

  const displayedUsers = useMemo(
    () => (mini ? users.slice(0, wideness) : users),
    [mini, wideness, users],
  )

  return (
    <StyledList>
      {displayedUsers.map(user => (
        <li key={user.cursor}>
          <UserCard user={user.node} />
        </li>
      ))}
    </StyledList>
  )
}

UserList.defaultProps = {
  mini: false,
}

UserList.propTypes = {
  users: MiniUserConnectionList.isRequired,
  mini: PropTypes.bool,
}
