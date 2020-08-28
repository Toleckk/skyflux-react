import React from 'react'
import {Box} from 'reflexbox/styled-components'
import {Search} from '../../templates'
import {PostsDisplay} from '../../organisms'

const posts = [
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
]

export const Posts = () => {
  return (
    <Search>
      {posts && !!posts.length && (
        <Box marginTop="2rem">
          <PostsDisplay posts={posts} />
        </Box>
      )}
    </Search>
  )
}
