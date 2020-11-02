import React, {forwardRef} from 'react'
import PropTypes from 'prop-types'
import {Flex} from 'reflexbox/styled-components'
import {useTranslation} from 'react-i18next'
import {H1, Link} from 'ui'
import {MiniUserConnectionList} from 'models/user'
import {UserList} from 'features/common/molecules'

export const UsersDisplay = forwardRef(({users, query, mini, loading}, ref) => {
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
      <UserList users={users} mini={mini} ref={ref} loading={loading} />
    </div>
  )
})

UsersDisplay.displayName = 'UsersDisplay'

UsersDisplay.defaultProps = {
  query: '',
  mini: false,
  loading: false,
}

UsersDisplay.propTypes = {
  users: MiniUserConnectionList.isRequired,
  query: PropTypes.string,
  mini: PropTypes.bool,
  loading: PropTypes.bool,
}
