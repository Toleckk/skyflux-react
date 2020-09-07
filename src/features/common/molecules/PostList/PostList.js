import React, {forwardRef} from 'react'
import {PostConnectionList} from 'models/post'
import {PostCard} from '../PostCard'
import {PublicationList} from '../PublicationList'

export const PostList = forwardRef(({posts}, ref) => (
  <PublicationList publications={posts} Card={PostCard} ref={ref} />
))

PostList.displayName = 'PostList'

PostList.propTypes = {
  posts: PostConnectionList.isRequired,
}
