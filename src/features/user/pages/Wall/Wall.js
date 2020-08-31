import React, {useState} from 'react'
import ReactVisibilitySensor from 'react-visibility-sensor'
import {Box} from 'reflexbox/styled-components'
import {withTranslation} from 'react-i18next'
import {Divider} from '../../../../ui'
import {PostForm} from '../../../common/organisms'
import {PostList} from '../../../common/molecules'
import {UserInfo, UserRow} from '../../molecules'
import {StyledHeader, StyledStaticDivider} from './styles'

const user = {
  _id: '123',
  avatar:
    'https://res.cloudinary.com/jumper/image/upload/v1591605952/images/cuv6hqfjc8dhh9igsclt.jpg',
  nickname: 'toleckk',
  postsCount: 61,
  subscriptionsCount: 2,
  subscribersCount: 3,
  description: {
    about: '123',
    from: 'Armenia',
    birthday: '03.08.1999',
  },
}

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
  {
    _id: '5',
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
    _id: '6',
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
    _id: '7',
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
    _id: '8',
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
    _id: '9',
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

export const Wall = withTranslation('user')(({t}) => {
  const [isInfoVisible, setIsInfoVisible] = useState(false)

  return (
    <div>
      <ReactVisibilitySensor onChange={setIsInfoVisible} partialVisibility>
        <Box padding="0.5rem 0.5rem 0 0.5rem">
          <UserInfo user={user} />
        </Box>
      </ReactVisibilitySensor>
      <Divider />
      <PostForm placeholder={t('Write a text')} />
      <Divider />
      <PostList posts={posts} />
      {!isInfoVisible && (
        <StyledHeader>
          <UserRow user={user} />
          <StyledStaticDivider />
        </StyledHeader>
      )}
    </div>
  )
})
