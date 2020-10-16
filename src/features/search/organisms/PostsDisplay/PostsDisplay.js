import React, {forwardRef} from 'react'
import PropTypes from 'prop-types'
import {Flex} from 'reflexbox/styled-components'
import {useTranslation} from 'react-i18next'
import {H1, Link} from 'ui'
import {PostConnectionList} from 'models/post'
import {PostList} from 'features/common/molecules'

export const PostsDisplay = forwardRef(({posts, withAllLink}, ref) => {
  const {t} = useTranslation('search')

  return (
    <div>
      <Flex
        justifyContent="space-between"
        alignItems="center"
        marginBottom="1.5rem"
      >
        <H1>{t('Found posts')}</H1>
        {withAllLink && <Link to="/search/posts">{t('Show all')}</Link>}
      </Flex>
      <PostList posts={posts} ref={ref} />
    </div>
  )
})

PostsDisplay.displayName = 'PostsDisplay'

PostsDisplay.defaultProps = {
  withALlLink: false,
}

PostsDisplay.propTypes = {
  posts: PostConnectionList.isRequired,
  withAllLink: PropTypes.bool,
}
