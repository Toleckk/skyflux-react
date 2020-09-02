import React from 'react'
import {Box} from 'reflexbox/styled-components'
import {Trans, withTranslation} from 'react-i18next'
import {PostForm} from 'features/common/organisms'
import {PostList, UserList} from 'features/common/molecules'
import {Divider, H1, Link, Text} from 'ui'
import {StyledContainer} from './styles'

const postsMock = [
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

export const All = withTranslation('feed')(({t}) => (
  <StyledContainer>
    <PostForm placeholder={t('Write a news')} />
    <Divider />
    {postsMock.length ? (
      <PostList posts={postsMock} />
    ) : (
      <div>
        <H1>{t('Your feed is empty')}</H1>
        <Box margin="1rem 0">
          <UserList users={users} />
        </Box>
        <Text>
          <Trans t={t}>
            If look smth, you can use our <Link to={'/search'}>search</Link>
          </Trans>
        </Text>
        <Divider />
      </div>
    )}
  </StyledContainer>
))
