import React, {useState} from 'react'
import ReactVisibilitySensor from 'react-visibility-sensor'
import {Box, Flex} from 'reflexbox/styled-components'
import {useTranslation} from 'react-i18next'
import {useParams} from 'react-router'
import {Divider, Loader} from 'ui'
import {PostForm} from 'features/common/organisms'
import {useIsMe, useMyQuery, useMyTitle} from 'features/common/hooks'
import {getUserByNickname} from 'models/user'
import {PostsDisplay} from '../../organisms'
import {PrivateScreen, UserInfo, UserRow} from '../../molecules'
import {StyledHeader, StyledStaticDivider} from './styles'

export const Wall = () => {
  const {t} = useTranslation('user')

  const {nickname} = useParams()
  useMyTitle('@' + nickname)

  const isMe = useIsMe({nickname})

  const {data, loading} = useMyQuery(getUserByNickname(nickname))
  const user = data?.getUserByNickname

  const [isInfoVisible, setIsInfoVisible] = useState(false)

  return (
    <Flex flexDirection="column" minHeight="100%">
      <ReactVisibilitySensor onChange={setIsInfoVisible} partialVisibility>
        <Box padding="0.5rem 0.5rem 0 0.5rem">
          {loading ? <Loader /> : <UserInfo user={user} />}
        </Box>
      </ReactVisibilitySensor>
      <Divider />
      {isMe && (
        <>
          <PostForm placeholder={t('Write a text')} />
          <Divider />
        </>
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
}
