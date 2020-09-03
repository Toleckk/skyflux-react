import React from 'react'
import PropTypes from 'prop-types'
import {Flex} from 'reflexbox/styled-components'
import {useTranslation} from 'react-i18next'
import {H1, Link} from 'ui'
import {UserList} from 'features/common/molecules'

export const UsersDisplay = ({users, withAllLink, mini}) => {
  const {t} = useTranslation('search')

  return (
    <div>
      <Flex
        justifyContent="space-between"
        alignItems="center"
        marginBottom="1.5rem"
      >
        <H1>{t('Found users')}</H1>
        {withAllLink && <Link to="/search/users">{t('Show all')}</Link>}
      </Flex>
      <UserList users={users} mini={mini} />
    </div>
  )
}

UsersDisplay.defaultProps = {
  withAllLink: false,
  mini: false,
}

UsersDisplay.propTypes = {
  users: UserList.propTypes.users,
  withAllLink: PropTypes.bool,
  mini: PropTypes.bool,
}
