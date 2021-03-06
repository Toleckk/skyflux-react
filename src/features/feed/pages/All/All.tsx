import React, {memo} from 'react'
import {Box} from 'reflexbox/styled-components'
import {Trans, useTranslation} from 'react-i18next'
import {
  PostForm,
  PostList,
  UserList,
} from '@skyflux/react/features/shared/components'
import {useMyTitle} from '@skyflux/react/features/shared/hooks'
import {H1, Text} from '@skyflux/react/typography'
import {Divider, Link, Loader} from '@skyflux/react/ui'
import {StyledContainer} from './styles'
import {useFeed, useSuggestions} from '../../hooks'

export const All = memo(() => {
  const {t} = useTranslation('feed')

  useMyTitle(t('Feed'))

  const {posts, loading: feedLoading, more} = useFeed()

  const {users, loading: suggestionsLoading} = useSuggestions(
    feedLoading || !!posts?.edges?.length,
  )

  return (
    <StyledContainer>
      <PostForm placeholder={t('Write a news')} />
      <Divider />
      {feedLoading && !posts?.edges?.length ? (
        <Loader />
      ) : posts?.edges?.length ? (
        <PostList posts={posts} onMore={more} />
      ) : (
        <div>
          <H1>{t('Your feed is empty')}</H1>
          <Box margin="1rem 0">
            {suggestionsLoading || !users ? (
              <Loader />
            ) : (
              <UserList users={users} />
            )}
          </Box>
          <Text>
            <Trans t={t}>
              If look smth, you can use our <Link to={'/search'}>search</Link>
            </Trans>
          </Text>
          <Divider />
        </div>
      )}
    </StyledContainer>
  )
})

All.displayName = 'All'
