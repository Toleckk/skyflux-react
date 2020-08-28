import React from 'react'
import PropTypes from 'prop-types'
import {PostCard} from '../PostCard'

export const PostList = ({posts}) => (
  <ul>
    {posts.map(post => (
      <li key={post._id}>
        <PostCard post={post} />
      </li>
    ))}
  </ul>
)

PostList.propTypes = {
  posts: PropTypes.arrayOf(PostCard.propTypes.post).isRequired,
}
