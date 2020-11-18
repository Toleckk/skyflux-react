import React, {memo, Suspense} from 'react'
import {Box, Flex} from 'reflexbox/styled-components'
import {Translation} from 'react-i18next'
import {useParams} from 'react-router'
import {useInView} from 'react-intersection-observer'
import {useNetwork} from 'react-use'
import {useAsync} from '@react-hook/async'
import {useQuery} from '@apollo/client'
import {Divider, Loader} from 'ui'
import {useIsMe, useLoader, useMyTitle} from 'features/common/hooks'
import {PostForm} from 'features/common/organisms'
import {USER} from 'models/user'
import {PostsDisplay} from '../../organisms'
import {PrivateScreen, UserInfo, UserRow} from '../../molecules'
import {StyledHeader, StyledStaticDivider} from './styles'

export const Wall = memo(() => {
  const {nickname} = useParams()
  useMyTitle('@' + nickname)

  const isMe = useIsMe({nickname})

  const {data, loading, fetchMore} = useQuery(USER, {
    fetchPolicy: 'cache-and-network',
    nextFetchPolicy: 'cache-first',
    notifyOnNetworkStatusChange: true,
    variables: {
      nickname,
      firstPosts: 25,
    },
  })

  const user = data?.user

  const [{status}, more] = useAsync(() =>
    fetchMore({
      variables: {
        afterPost: user?.posts?.pageInfo?.endCursor,
      },
    }),
  )

  const {online} = useNetwork()
  useLoader(loading && online && status !== 'loading' && user)

  const [ref, isInfoVisible] = useInView()

  return (
    <Flex flexDirection="column" minHeight="100%">
      <Box padding="0.5rem 0.5rem 0 0.5rem" ref={ref}>
        {!user ? <Loader /> : <UserInfo user={user} />}
      </Box>
      <Divider />
      {isMe && (
        <Suspense fallback={<Loader />}>
          <Translation ns="user">
            {t => (
              <>
                <PostForm placeholder={t('Write a text')} />
                <Divider />
              </>
            )}
          </Translation>
        </Suspense>
      )}

      {user && user.private && !isMe && !user.mySub?.accepted ? (
        <PrivateScreen />
      ) : user ? (
        <PostsDisplay onMore={more} posts={user.posts} />
      ) : !online ? (
        <div>Data cannot be loaded</div>
      ) : (
        <Loader />
      )}

      {!isInfoVisible && user && (
        <StyledHeader>
          <UserRow user={user} />
          <StyledStaticDivider />
        </StyledHeader>
      )}
    </Flex>
  )
})
