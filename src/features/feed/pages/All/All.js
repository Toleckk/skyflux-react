import React from 'react'
import {Box} from 'reflexbox/styled-components'
import {Trans, withTranslation} from 'react-i18next'
import {useInfiniteScroll} from 'utils'
import {PostForm} from 'features/common/organisms'
import {PostList, UserList} from 'features/common/molecules'
import {useMyQuery} from 'features/common/hooks'
import {getSuggestions} from 'models/user'
import {getFeed} from 'models/post'
import {Divider, H1, Link, Loader, Text} from 'ui'
import {StyledContainer} from './styles'

export const All = withTranslation('feed')(({t}) => {
  const {data, loading, fetchMore} = useMyQuery(getFeed({first: 25}))
  const {data: suggestionsData, loading: suggestionsLoading} = useMyQuery({
    ...getSuggestions(),
    skip: loading || data.getFeed?.edges?.length,
  })

  const posts = data?.getFeed?.edges
  const suggestions = suggestionsData?.getSuggestions?.edges

  const scrollContainerRef = useInfiniteScroll({
    fetchMore,
    loading,
    hasMore: data?.getFeed?.pageInfo?.hasNextPage,
  })

  return (
    <StyledContainer>
      <PostForm placeholder={t('Write a news')} />
      <Divider />
      {loading ? (
        <Loader />
      ) : posts?.length ? (
        <PostList posts={posts} ref={scrollContainerRef} />
      ) : (
        <div>
          <H1>{t('Your feed is empty')}</H1>
          <Box margin="1rem 0">
            {suggestionsLoading || !suggestions ? (
              <Loader />
            ) : (
              <UserList users={suggestions} />
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
