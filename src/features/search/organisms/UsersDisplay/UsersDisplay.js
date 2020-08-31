import React from 'react'
import {Flex} from 'reflexbox/styled-components'
import {useTranslation} from 'react-i18next'
import {H1, Link} from '../../../../ui'
import {UserList} from '../../../common/molecules'

export const UsersDisplay = ({users}) => {
  const {t} = useTranslation('search')

  return (
    <div>
      <Flex
        justifyContent="space-between"
        alignItems="center"
        marginBottom="1.5rem"
      >
        <H1>{t('Found users')}</H1>
        <Link to="/search/users">{t('Show all')}</Link>
      </Flex>
      <UserList users={users} />
    </div>
  )
}

UsersDisplay.propTypes = {
  users: UserList.propTypes.users,
}
