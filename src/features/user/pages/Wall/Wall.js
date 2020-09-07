import React, {useState} from 'react'
import ReactVisibilitySensor from 'react-visibility-sensor'
import {Box, Flex} from 'reflexbox/styled-components'
import {withTranslation} from 'react-i18next'
import {useParams} from 'react-router'
import {useInfiniteScroll} from 'useInfiniteScroll'
import {Divider, Loader} from 'ui'
import {PostForm} from 'features/common/organisms'
import {PostList} from 'features/common/molecules'
import {useMyQuery} from 'features/common/hooks'
import {getUserByNickname} from 'models/user'
import {getPostsByNickname} from 'models/post'
import {PrivateScreen, UserInfo, UserRow} from '../../molecules'
import {StyledHeader, StyledStaticDivider} from './styles'

export const Wall = withTranslation('user')(({t}) => {
  const {nickname} = useParams()
  const {data: userData, loading: userLoading} = useMyQuery(
    getUserByNickname(nickname),
  )
  const {data: postsData, loading: postsLoading, fetchMore} = useMyQuery({
    ...getPostsByNickname(nickname),
    variables: {first: 25},
  })

  const postsContainerRef = useInfiniteScroll({
    fetchMore,
    loading: postsLoading,
    hasMore: postsData?.getPostsByNickname?.pageInfo?.hasNextPage,
  })

  const user = userData?.getUserByNickname
  const posts = postsData?.getPostsByNickname?.edges

  const [isInfoVisible, setIsInfoVisible] = useState(false)

  return (
    <Flex flexDirection="column" minHeight="100%">
      <ReactVisibilitySensor onChange={setIsInfoVisible} partialVisibility>
        <Box padding="0.5rem 0.5rem 0 0.5rem">
          {userLoading ? <Loader /> : <UserInfo user={user} />}
        </Box>
      </ReactVisibilitySensor>
      <Divider />
      <PostForm placeholder={t('Write a text')} />
      <Divider />
      {userLoading || postsLoading ? (
        <Loader />
      ) : user.isPrivate ? (
        <PrivateScreen />
      ) : (
        <PostList posts={posts} ref={postsContainerRef} />
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
