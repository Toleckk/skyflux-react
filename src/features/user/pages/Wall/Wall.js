import React, {useState} from 'react'
import ReactVisibilitySensor from 'react-visibility-sensor'
import {Box, Flex} from 'reflexbox/styled-components'
import {withTranslation} from 'react-i18next'
import {useParams} from 'react-router'
import {useInfiniteScroll} from 'utils'
import {Divider, H1, Loader} from 'ui'
import {PostForm} from 'features/common/organisms'
import {PostList} from 'features/common/molecules'
import {useIsMe, useMyQuery, useMyTitle} from 'features/common/hooks'
import {getUserByNickname} from 'models/user'
import {getPostsByNickname} from 'models/post'
import {PrivateScreen, UserInfo, UserRow} from '../../molecules'
import {StyledHeader, StyledStaticDivider} from './styles'

export const Wall = withTranslation('user')(({t}) => {
  const {nickname} = useParams()
  useMyTitle('@' + nickname)

  const isMe = useIsMe({nickname})

  const {data: userData, loading: userLoading} = useMyQuery(
    getUserByNickname(nickname),
  )
  const {data: postsData, loading: postsLoading, fetchMore} = useMyQuery(
    getPostsByNickname(nickname, {first: 25}),
  )

  const user = userData?.getUserByNickname
  const posts = postsData?.getPostsByNickname?.edges

  const hasMore = postsData?.getPostsByNickname?.pageInfo?.hasNextPage

  const postsContainerRef = useInfiniteScroll({
    fetchMore,
    loading: postsLoading,
    hasMore,
  })

  const [isInfoVisible, setIsInfoVisible] = useState(false)

  return (
    <Flex flexDirection="column" minHeight="100%">
      <ReactVisibilitySensor onChange={setIsInfoVisible} partialVisibility>
        <Box padding="0.5rem 0.5rem 0 0.5rem">
          {userLoading ? <Loader /> : <UserInfo user={user} />}
        </Box>
      </ReactVisibilitySensor>
      <Divider />
      {isMe && (
        <>
          <PostForm placeholder={t('Write a text')} />
          <Divider />
        </>
      )}
      {userLoading || postsLoading ? (
        <Loader />
      ) : user.private && !isMe && !user.mySub?.accepted ? (
        <PrivateScreen />
      ) : !posts.length ? (
        <Flex flex={1} alignItems="center" justifyContent="center">
          <H1 center>{t("This user hasn't publish any posts yet")}</H1>
        </Flex>
      ) : (
        <PostList posts={posts} ref={postsContainerRef} loading={hasMore} />
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
