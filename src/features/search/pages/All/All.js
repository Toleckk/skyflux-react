import React from 'react'
import {Box} from 'reflexbox/styled-components'
import {Search} from '../../templates'
import {PostsDisplay, UsersDisplay} from '../../organisms'

const data = {
  users: [
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
  ],
  posts: [
    {
      _id: '1',
      text: '123456',
      date: '123456',
      commentsCount: 1,
      likesCount: 2,
      hasMyLike: true,
      user: {
        nickname: 'toleckk',
        avatar:
          'https://res.cloudinary.com/jumper/image/upload/v1591605952/images/cuv6hqfjc8dhh9igsclt.jpg',
      },
    },
    {
      _id: '2',
      text: '123456',
      date: '123456',
      commentsCount: 1,
      likesCount: 2,
      hasMyLike: true,
      user: {
        nickname: 'toleckk',
        avatar:
          'https://res.cloudinary.com/jumper/image/upload/v1591605952/images/cuv6hqfjc8dhh9igsclt.jpg',
      },
    },
    {
      _id: '3',
      text: '123456',
      date: '123456',
      commentsCount: 1,
      likesCount: 2,
      hasMyLike: true,
      user: {
        nickname: 'toleckk',
        avatar:
          'https://res.cloudinary.com/jumper/image/upload/v1591605952/images/cuv6hqfjc8dhh9igsclt.jpg',
      },
    },
    {
      _id: '4',
      text: '123456',
      date: '123456',
      commentsCount: 1,
      likesCount: 2,
      hasMyLike: true,
      user: {
        nickname: 'toleckk',
        avatar:
          'https://res.cloudinary.com/jumper/image/upload/v1591605952/images/cuv6hqfjc8dhh9igsclt.jpg',
      },
    },
  ],
}

export const All = () => {
  return (
    <Search>
      {data &&
        ((data.users && !!data.users.length) ||
          (data.posts && !!data.posts.length)) && (
          <>
            {data.users && !!data.users.length && (
              <Box marginTop="2rem">
                <UsersDisplay users={data.users} />
              </Box>
            )}
            {data.posts && !!data.posts.length && (
              <Box marginTop="2rem">
                <PostsDisplay posts={data.posts} />
              </Box>
            )}
          </>
        )}
    </Search>
  )
}
