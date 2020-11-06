import React, {forwardRef} from 'react'
import PropTypes from 'prop-types'
import {PostConnectionList} from 'models/post'
import {PostCard} from '../PostCard'
import {PublicationList} from '../PublicationList'

export const PostList = forwardRef(({posts, loading, onPostDelete}, ref) => (
  <PublicationList
    publications={posts}
    Card={PostCard}
    ref={ref}
    loading={loading}
    onItemDelete={onPostDelete}
  />
))

PostList.displayName = 'PostList'

PostList.defaultProps = {
  loading: false,
  onPostDelete: undefined,
}

PostList.propTypes = {
  posts: PostConnectionList.isRequired,
  onPostDelete: PropTypes.func,
  loading: PropTypes.bool,
}
