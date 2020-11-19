import React, {memo, Suspense} from 'react'
import {Box, Flex} from 'reflexbox/styled-components'
import {Translation} from 'react-i18next'
import {useParams} from 'react-router'
import {useNetwork} from 'react-use'
import {useInView} from 'react-intersection-observer'
import {Divider, Loader} from 'ui'
import {useMe, useMyTitle} from 'features/shared/hooks'
import {PostForm} from 'features/shared/organisms'
import {useUser} from '../../hooks'
import {PostsDisplay} from '../../organisms'
import {PrivateScreen, UserInfo, UserRow} from '../../molecules'
import {StyledHeader, StyledStaticDivider} from './styles'

export const Wall = memo(() => {
  const {nickname} = useParams()
  useMyTitle('@' + nickname)

  const {user, posts, more} = useUser(nickname)
  const {isMe} = useMe()

  const {online} = useNetwork()

  const [ref, isInfoVisible] = useInView()

  return (
    <Flex flexDirection="column" minHeight="100%">
      <Box padding="0.5rem 0.5rem 0 0.5rem" ref={ref}>
        {!user ? <Loader /> : <UserInfo user={user} />}
      </Box>
      <Divider />
      {isMe(nickname) && (
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

      {user && user.private && !isMe(nickname) && !user.mySub?.accepted ? (
        <PrivateScreen />
      ) : user ? (
        <PostsDisplay onMore={more} posts={posts} />
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

Wall.displayName = 'Wall'
