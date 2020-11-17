import React from 'react'
import PropTypes from 'prop-types'
import {Flex} from 'reflexbox/styled-components'
import {useTranslation} from 'react-i18next'
import {H1, Link} from 'ui'
import {MiniUserConnectionList} from 'models/user'
import {UserList} from 'features/common/molecules'

export const UsersDisplay = ({users, query, mini, onMore}) => {
  const {t} = useTranslation('search')

  return (
    <div>
      <Flex
        justifyContent="space-between"
        alignItems="center"
        marginBottom="1.5rem"
      >
        <H1>{t('Found users')}</H1>
        {!!query && (
          <Link to={'/search/users?q=' + query}>{t('Show all')}</Link>
        )}
      </Flex>
      <UserList users={users} mini={mini} onMore={onMore} />
    </div>
  )
}

UsersDisplay.defaultProps = {
  query: '',
  mini: false,
}

UsersDisplay.propTypes = {
  users: MiniUserConnectionList.isRequired,
  query: PropTypes.string,
  mini: PropTypes.bool,
  onMore: PropTypes.func,
}
