import React from 'react'
import {Flex} from 'reflexbox/styled-components'
import {Link} from 'react-router-dom'
import {PostForm} from '../../../common/organisms'
import {PostCard, UserCard} from '../../../common/molecules'
import {Divider, H1, Text} from '../../../../ui'
import {StyledContainer} from './styles'

const postsMock = [
  // {
  //   _id: '1',
  //   text: '123456',
  //   date: '123456',
  //   commentsCount: 1,
  //   likesCount: 2,
  //   hasMyLike: true,
  //   user: {
  //     nickname: 'toleckk',
  //     avatar:
  //       'https://res.cloudinary.com/jumper/image/upload/v1591605952/images/cuv6hqfjc8dhh9igsclt.jpg',
  //   },
  // },
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

export const All = () => (
  <StyledContainer>
    <PostForm />
    <Divider />
    {postsMock.length ? (
      postsMock.map(post => <PostCard post={post} key={post._id} />)
    ) : (
      <div>
        <H1>
          Ваша лента пуста! Осмотритесь, чтобы найти интересных пользователей
        </H1>
        <Flex as="ul" justifyContent="space-between" margin="1rem 0">
          {users.map(user => (
            <li key={user._id}>
              <UserCard user={user} key={user} />
            </li>
          ))}
        </Flex>
        <Text>
          Если ищете что-то, Вы можете воспользоваться нашим{' '}
          <Link to="/search">поиском</Link>
        </Text>
        <Divider />
      </div>
    )}
  </StyledContainer>
)
