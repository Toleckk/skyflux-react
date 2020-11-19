import React, {Suspense} from 'react'
import PropTypes from 'prop-types'
import {useTranslation} from 'react-i18next'
import {Flex} from 'reflexbox/styled-components'
import {H1, ListItem, Loader} from 'ui'
import {useInfiniteScroll} from 'utils'
import {PostConnection} from 'models/post'
import {PostCard} from '../PostCard'

export const PostList = ({posts, onPostDelete, onMore}) => {
  const {t} = useTranslation('post')

  const edges = posts.edges
  const hasMore = posts.pageInfo.hasNextPage

  const postsContainerRef = useInfiniteScroll({fetchMore: onMore, hasMore})

  return !edges.length ? (
    <Flex flex={1} alignItems="center" justifyContent="center">
      <H1 center>{t('There is no posts yet')}</H1>
    </Flex>
  ) : (
    <Suspense fallback={<Loader />}>
      <ul ref={hasMore ? postsContainerRef : undefined}>
        {edges.map(({cursor, node}) => (
          <ListItem key={cursor}>
            <PostCard publication={node} onDelete={onPostDelete} />
          </ListItem>
        ))}
        {!!onMore && hasMore && (
          <Flex as="li" width="100%" height="3rem">
            <Loader size="1.5rem" hasShadow={false} borderWidth="3px" />
          </Flex>
        )}
      </ul>
    </Suspense>
  )
}

PostList.defaultProps = {
  onPostDelete: undefined,
}

PostList.propTypes = {
  posts: PostConnection.isRequired,
  onPostDelete: PropTypes.func,
  onMore: PropTypes.func,
}
