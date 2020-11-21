import React from 'react'
import {Flex} from 'reflexbox/styled-components'
import {useTranslation} from 'react-i18next'
import {H1} from 'typography'
import {Link} from 'ui'
import {UserList} from 'features/shared/molecules'
import {UserBadgeConnectionFragment} from 'features/shared/graphql'

export type UsersDisplayProps = {
  users: UserBadgeConnectionFragment
  query?: string
  mini?: boolean
  onMore?: () => unknown
}

export const UsersDisplay: React.FC<UsersDisplayProps> = ({
  users,
  query,
  mini,
  onMore,
}) => {
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
