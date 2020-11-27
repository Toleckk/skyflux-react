import React from 'react'
import {Flex} from 'reflexbox/styled-components'
import {useTranslation} from 'react-i18next'
import {H1} from '@skyflux/react/typography'
import {Link} from '@skyflux/react/ui'
import {PostList} from '@skyflux/react/features/shared/components'
import {PostConnectionFragment} from '@skyflux/react/features/shared/graphql'

export type PostsDisplayProps = {
  posts: PostConnectionFragment
  query?: string
  onMore?: () => unknown
}

export const PostsDisplay: React.FC<PostsDisplayProps> = ({
  posts,
  query,
  onMore,
}) => {
  const {t} = useTranslation('search')

  return (
    <div>
      <Flex
        justifyContent="space-between"
        alignItems="center"
        marginBottom="1.5rem"
      >
        <H1>{t('Found posts')}</H1>
        {!!query && (
          <Link to={'/search/posts?q=' + query}>{t('Show all')}</Link>
        )}
      </Flex>
      <PostList posts={posts} onMore={onMore} />
    </div>
  )
}

PostsDisplay.displayName = 'PostsDisplay'
