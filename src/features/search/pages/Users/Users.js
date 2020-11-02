import React, {useState} from 'react'
import {Box} from 'reflexbox/styled-components'
import {useInfiniteScroll} from 'utils'
import {useMyQuery} from 'features/common/hooks'
import {getFoundUsers} from 'models/user'
import {Search} from '../../templates'
import {UsersDisplay} from '../../organisms'

export const Users = () => {
  const [text, setText] = useState('')
  const {data, loading, fetchMore} = useMyQuery(
    getFoundUsers(text, {first: 24}),
  )

  const users = data?.getFoundUsers?.edges
  const hasMore = data?.getFoundUsers?.pageInfo?.hasNextPage

  const usersContainerRef = useInfiniteScroll({
    fetchMore,
    loading,
    hasMore,
  })

  return (
    <Search onInputChange={setText} isLoading={loading}>
      {!!users?.length && (
        <Box marginTop="2rem">
          <UsersDisplay
            users={users}
            ref={usersContainerRef}
            loading={hasMore}
          />
        </Box>
      )}
    </Search>
  )
}
