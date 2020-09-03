import React from 'react'
import PropTypes from 'prop-types'
import {MiniUserConnectionList} from 'models/user'
import {UserCard} from '../UserCard'

export const UserList = ({users}) => (
  <Flex as="ul" justifyContent="space-between">
    {users.map(user => (
      <li key={user._id}>
        <UserCard user={user} key={user} />
      </li>
    ))}
  </Flex>
)

UserList.propTypes = {
  users: MiniUserConnectionList.isRequired,
}
