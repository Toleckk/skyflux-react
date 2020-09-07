import React, {useState} from 'react'
import {Box} from 'reflexbox/styled-components'
import {useInfiniteScroll} from 'useInfiniteScroll'
import {useMyQuery} from 'features/common/hooks'
import {getFoundUsers} from 'models/user'
import {Search} from '../../templates'
import {UsersDisplay} from '../../organisms'

export const Users = () => {
  const [text, setText] = useState('')
  const {data, loading, fetchMore} = useMyQuery(
    getFoundUsers(text, {first: 24}),
  )

  const usersContainerRef = useInfiniteScroll({
    fetchMore,
    loading,
    hasMore: data?.getFoundUsers?.pageInfo?.hasNextPage,
  })

  const users = data?.getFoundUsers?.edges

  return (
    <Search onInputChange={setText} isLoading={loading}>
      {!!users?.length && (
        <Box marginTop="2rem">
          <UsersDisplay users={users} ref={usersContainerRef} />
        </Box>
      )}
    </Search>
  )
}
