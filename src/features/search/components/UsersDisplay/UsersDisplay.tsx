import React from 'react'
import {Flex} from 'reflexbox/styled-components'
import {useTranslation} from 'react-i18next'
import {H1} from '@skyflux/react/typography'
import {Link} from '@skyflux/react/ui'
import {UserList} from '@skyflux/react/features/shared/components'
import {UserBadgeConnectionFragment} from '@skyflux/react/features/shared/graphql'

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
