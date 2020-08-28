import React from 'react'
import {Flex} from 'reflexbox/styled-components'
import {H1, Link} from '../../../../ui'
import {UserList} from '../../../common/molecules'

export const UsersDisplay = ({users}) => (
  <div>
    <Flex
      justifyContent="space-between"
      alignItems="center"
      marginBottom="1.5rem"
    >
      <H1>Найденные пользователи</H1>
      <Link to="/search/users">Показать все</Link>
    </Flex>
    <UserList users={users} />
  </div>
)

UsersDisplay.propTypes = {
  users: UserList.propTypes.users,
}
