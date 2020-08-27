import React from 'react'
import {PostForm} from '../../../common/organisms'
import {PostCard} from '../../../common/molecules'
import {Divider} from '../../../../ui'
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
]

export const All = () => (
  <StyledContainer>
    <PostForm />
    <Divider />
    {postsMock.map(post => (
      <PostCard post={post} key={post._id} />
    ))}
  </StyledContainer>
)
