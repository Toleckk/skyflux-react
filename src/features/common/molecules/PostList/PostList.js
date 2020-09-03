import React from 'react'
import {PostConnectionList} from 'models/post'
import {PostCard} from '../PostCard'
import {PublicationList} from '../PublicationList'

export const PostList = ({posts}) => (
  <PublicationList publications={posts} Card={PostCard} />
)

PostList.propTypes = {
  posts: PostConnectionList.isRequired,
}
