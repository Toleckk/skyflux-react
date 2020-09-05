import React, {useState} from 'react'
import {Box} from 'reflexbox/styled-components'
import {useMyQuery} from 'features/common/hooks'
import {getFoundUsers} from 'models/user'
import {Search} from '../../templates'
import {UsersDisplay} from '../../organisms'

export const Users = () => {
  const [text, setText] = useState('')
  const {data, loading} = useMyQuery(getFoundUsers(text))

  const users = data?.getFoundUsers?.edges

  return (
    <Search onInputChange={setText} isLoading={loading}>
      {!!users?.length && (
        <Box marginTop="2rem">
          <UsersDisplay users={users} />
        </Box>
      )}
    </Search>
  )
}
