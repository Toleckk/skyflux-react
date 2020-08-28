import React from 'react'
import {Box} from 'reflexbox/styled-components'
import {Search} from '../../templates'
import {UsersDisplay} from '../../organisms'

const users = [
  {
    _id: 1,
    nickname: 'toleckk',
    avatar:
      'https://res.cloudinary.com/jumper/image/upload/v1591605952/images/cuv6hqfjc8dhh9igsclt.jpg',
  },
  {
    _id: 2,
    nickname: 'toleckk',
    avatar:
      'https://res.cloudinary.com/jumper/image/upload/v1591605952/images/cuv6hqfjc8dhh9igsclt.jpg',
  },
  {
    _id: 3,
    nickname: 'toleckk',
    avatar:
      'https://res.cloudinary.com/jumper/image/upload/v1591605952/images/cuv6hqfjc8dhh9igsclt.jpg',
  },
  {
    _id: 4,
    nickname: 'toleckk',
    avatar:
      'https://res.cloudinary.com/jumper/image/upload/v1591605952/images/cuv6hqfjc8dhh9igsclt.jpg',
  },
]

export const Users = () => {
  return (
    <Search>
      {users && !!users.length && (
        <Box marginTop="2rem">
          <UsersDisplay users={users} />
        </Box>
      )}
    </Search>
  )
}
