import React, {useState} from 'react'
import ReactVisibilitySensor from 'react-visibility-sensor'
import {Box} from 'reflexbox/styled-components'
import {withTranslation} from 'react-i18next'
import {useParams} from 'react-router'
import {Divider, Loader} from 'ui'
import {PostForm} from 'features/common/organisms'
import {PostList} from 'features/common/molecules'
import {useMyQuery} from 'features/common/hooks'
import {getUserByNickname} from 'models/user'
import {getPostsByNickname} from 'models/post'
import {UserInfo, UserRow} from '../../molecules'
import {StyledHeader, StyledStaticDivider} from './styles'

export const Wall = withTranslation('user')(({t}) => {
  const {nickname} = useParams()
  const {data: userData, loading: userLoading} = useMyQuery(
    getUserByNickname(nickname),
  )
  const {data: postsData, loading: postsLoading} = useMyQuery(
    getPostsByNickname(nickname),
  )

  const user = userData?.getUserByNickname
  const posts = postsData?.getPostsByNickname?.edges

  const [isInfoVisible, setIsInfoVisible] = useState(false)

  return (
    <div>
      <ReactVisibilitySensor onChange={setIsInfoVisible} partialVisibility>
        <Box padding="0.5rem 0.5rem 0 0.5rem">
          {userLoading ? <Loader /> : <UserInfo user={user} />}
        </Box>
      </ReactVisibilitySensor>
      <Divider />
      <PostForm placeholder={t('Write a text')} />
      <Divider />
      {postsLoading || !posts ? <Loader /> : <PostList posts={posts} />}
      {!isInfoVisible && user && (
        <StyledHeader>
          <UserRow user={user} />
          <StyledStaticDivider />
        </StyledHeader>
      )}
    </div>
  )
})
