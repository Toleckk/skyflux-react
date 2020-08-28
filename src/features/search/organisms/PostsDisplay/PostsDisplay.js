import React from 'react'
import {Flex} from 'reflexbox/styled-components'
import {H1, Link} from '../../../../ui'
import {PostList} from '../../../common/molecules'

export const PostsDisplay = ({posts}) => (
  <div>
    <Flex
      justifyContent="space-between"
      alignItems="center"
      marginBottom="1.5rem"
    >
      <H1>Найденные пользователи</H1>
      <Link to="/search/posts">Показать все</Link>
    </Flex>
    <PostList posts={posts} />
  </div>
)

PostsDisplay.propTypes = {
  posts: PostList.propTypes.posts,
}
