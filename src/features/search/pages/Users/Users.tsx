import React, {useState} from 'react'
import {Box} from 'reflexbox/styled-components'
import {Search} from '../../templates'
import {UsersDisplay} from '../../organisms'
import {useSearchUsers} from '../../hooks'

export const Users: React.FC = () => {
  const [text, setText] = useState('')

  const {users, more, loading} = useSearchUsers(text)

  return (
    <Search onInputChange={setText} isLoading={loading}>
      {!!users?.edges?.length && (
        <Box marginTop="2rem">
          <UsersDisplay users={users} onMore={more} />
        </Box>
      )}
    </Search>
  )
}
