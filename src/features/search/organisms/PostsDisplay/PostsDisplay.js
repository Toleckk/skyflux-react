import React from 'react'
import {Flex} from 'reflexbox/styled-components'
import {useTranslation} from 'react-i18next'
import {H1, Link} from '../../../../ui'
import {PostList} from '../../../common/molecules'

export const PostsDisplay = ({posts}) => {
  const {t} = useTranslation('search')

  return (
    <div>
      <Flex
        justifyContent="space-between"
        alignItems="center"
        marginBottom="1.5rem"
      >
        <H1>{t('Found posts')}</H1>
        <Link to="/search/posts">{t('Show all')}</Link>
      </Flex>
      <PostList posts={posts} />
    </div>
  )
}

PostsDisplay.propTypes = {
  posts: PostList.propTypes.posts,
}
