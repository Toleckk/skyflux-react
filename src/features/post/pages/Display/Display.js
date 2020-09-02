import React from 'react'
import {Box, Flex} from 'reflexbox/styled-components'
import {CommentList, PostCard} from 'features/common/molecules'
import {Icon, Input} from 'ui'

const post = {
  _id: '1',
  text: '123456',
  date: '123456',
  commentsCount: 5,
  likesCount: 2,
  hasMyLike: true,
  user: {
    nickname: 'toleckk',
    avatar:
      'https://res.cloudinary.com/jumper/image/upload/v1591605952/images/cuv6hqfjc8dhh9igsclt.jpg',
  },
  comments: [
    {
      text: '123',
      date: '1234',
      user: {
        nickname: 'toleckk',
        avatar:
          'https://res.cloudinary.com/jumper/image/upload/v1591605952/images/cuv6hqfjc8dhh9igsclt.jpg',
      },
    },
    {
      text: '123',
      date: '1234',
      user: {
        nickname: 'toleckk',
        avatar:
          'https://res.cloudinary.com/jumper/image/upload/v1591605952/images/cuv6hqfjc8dhh9igsclt.jpg',
      },
    },
    {
      text: '123',
      date: '1234',
      user: {
        nickname: 'toleckk',
        avatar:
          'https://res.cloudinary.com/jumper/image/upload/v1591605952/images/cuv6hqfjc8dhh9igsclt.jpg',
      },
    },
    {
      text: '123',
      date: '1234',
      user: {
        nickname: 'toleckk',
        avatar:
          'https://res.cloudinary.com/jumper/image/upload/v1591605952/images/cuv6hqfjc8dhh9igsclt.jpg',
      },
    },
    {
      text: '123',
      date: '1234',
      user: {
        nickname: 'toleckk',
        avatar:
          'https://res.cloudinary.com/jumper/image/upload/v1591605952/images/cuv6hqfjc8dhh9igsclt.jpg',
      },
    },
    {
      text: '123',
      date: '1234',
      user: {
        nickname: 'toleckk',
        avatar:
          'https://res.cloudinary.com/jumper/image/upload/v1591605952/images/cuv6hqfjc8dhh9igsclt.jpg',
      },
    },
    {
      text: '123',
      date: '1234',
      user: {
        nickname: 'toleckk',
        avatar:
          'https://res.cloudinary.com/jumper/image/upload/v1591605952/images/cuv6hqfjc8dhh9igsclt.jpg',
      },
    },
    {
      text: '123',
      date: '1234',
      user: {
        nickname: 'toleckk',
        avatar:
          'https://res.cloudinary.com/jumper/image/upload/v1591605952/images/cuv6hqfjc8dhh9igsclt.jpg',
      },
    },
    {
      text: '123',
      date: '1234',
      user: {
        nickname: 'toleckk',
        avatar:
          'https://res.cloudinary.com/jumper/image/upload/v1591605952/images/cuv6hqfjc8dhh9igsclt.jpg',
      },
    },
    {
      text: '123',
      date: '1234',
      user: {
        nickname: 'toleckk',
        avatar:
          'https://res.cloudinary.com/jumper/image/upload/v1591605952/images/cuv6hqfjc8dhh9igsclt.jpg',
      },
    },
    {
      text: '123',
      date: '1234',
      user: {
        nickname: 'toleckk',
        avatar:
          'https://res.cloudinary.com/jumper/image/upload/v1591605952/images/cuv6hqfjc8dhh9igsclt.jpg',
      },
    },
    {
      text: '123',
      date: '1234',
      user: {
        nickname: 'toleckk',
        avatar:
          'https://res.cloudinary.com/jumper/image/upload/v1591605952/images/cuv6hqfjc8dhh9igsclt.jpg',
      },
    },
    {
      text: '123',
      date: '1234',
      user: {
        nickname: 'toleckk',
        avatar:
          'https://res.cloudinary.com/jumper/image/upload/v1591605952/images/cuv6hqfjc8dhh9igsclt.jpg',
      },
    },
    {
      text: '123',
      date: '1234',
      user: {
        nickname: 'toleckk',
        avatar:
          'https://res.cloudinary.com/jumper/image/upload/v1591605952/images/cuv6hqfjc8dhh9igsclt.jpg',
      },
    },
    {
      text: '123',
      date: '1234',
      user: {
        nickname: 'toleckk',
        avatar:
          'https://res.cloudinary.com/jumper/image/upload/v1591605952/images/cuv6hqfjc8dhh9igsclt.jpg',
      },
    },
    {
      text: '123',
      date: '1234',
      user: {
        nickname: 'toleckk',
        avatar:
          'https://res.cloudinary.com/jumper/image/upload/v1591605952/images/cuv6hqfjc8dhh9igsclt.jpg',
      },
    },
    {
      text: '123',
      date: '1234',
      user: {
        nickname: 'toleckk',
        avatar:
          'https://res.cloudinary.com/jumper/image/upload/v1591605952/images/cuv6hqfjc8dhh9igsclt.jpg',
      },
    },
  ].map((e, _id) => ({...e, _id})),
}

export const Display = () => (
  <Flex
    flexDirection="column"
    maxHeight="100vh"
    height="100%"
    paddingBottom="2rem"
  >
    <PostCard publication={post} />
    <Box overflowY="hidden" paddingBottom="1rem">
      <CommentList comments={post.comments} />
    </Box>
    <Input multi rows="1">
      <Box width="2rem" height="2rem">
        <Icon icon="message" />
      </Box>
    </Input>
  </Flex>
)
