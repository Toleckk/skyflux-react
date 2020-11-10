import React, {memo, Suspense} from 'react'
import {Box, Flex} from 'reflexbox/styled-components'
import {Translation} from 'react-i18next'
import {useParams} from 'react-router'
import {useInView} from 'react-intersection-observer'
import {Divider, Loader} from 'ui'
import {PostForm} from 'features/common/organisms'
import {useIsMe, useMyQuery, useMyTitle} from 'features/common/hooks'
import {getUserByNickname} from 'models/user'
import {PostsDisplay} from '../../organisms'
import {PrivateScreen, UserInfo, UserRow} from '../../molecules'
import {StyledHeader, StyledStaticDivider} from './styles'

export const Wall = memo(() => {
  const {nickname} = useParams()
  useMyTitle('@' + nickname)

  const isMe = useIsMe({nickname})

  const {data, loading} = useMyQuery({
    ...getUserByNickname(nickname),
    notifyOnNetworkStatusChange: true,
    fetchPolicy: 'network-only',
  })
  const user = data?.getUserByNickname

  const [ref, isInfoVisible] = useInView()

  return (
    <Flex flexDirection="column" minHeight="100%">
      <Box padding="0.5rem 0.5rem 0 0.5rem" ref={ref}>
        {loading ? <Loader /> : <UserInfo user={user} />}
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
      {loading ? (
        <Loader />
      ) : user.private && !isMe && !user.mySub?.accepted ? (
        <PrivateScreen />
      ) : (
        <PostsDisplay nickname={nickname} />
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
