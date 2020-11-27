import React, {Suspense} from 'react'
import {useTranslation} from 'react-i18next'
import {Flex} from 'reflexbox/styled-components'
import {H1} from '@skyflux/react/typography'
import {ListItem, Loader} from '@skyflux/react/ui'
import {useInfiniteScroll} from '@skyflux/react/utils'
import {PostCard} from '../PostCard'
import {PostConnectionFragment, PostFragment} from '../../graphql'

export type PostListProps = {
  posts: PostConnectionFragment
  onPostDelete?: (post: PostFragment) => unknown
  onMore?: () => unknown
}

export const PostList: React.FC<PostListProps> = ({
  posts,
  onPostDelete,
  onMore,
}) => {
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
            <PostCard post={node} onDelete={onPostDelete} />
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
