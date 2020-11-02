import React, {forwardRef} from 'react'
import PropTypes from 'prop-types'
import {PostConnectionList} from 'models/post'
import {PostCard} from '../PostCard'
import {PublicationList} from '../PublicationList'

export const PostList = forwardRef(({posts, loading}, ref) => (
  <PublicationList
    publications={posts}
    Card={PostCard}
    ref={ref}
    loading={loading}
  />
))

PostList.displayName = 'PostList'

PostList.defaultProps = {
  loading: false,
}

PostList.propTypes = {
  posts: PostConnectionList.isRequired,
  loading: PropTypes.bool,
}
