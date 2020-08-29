import React from 'react'
import PropTypes from 'prop-types'
import {PostCard} from '../PostCard'
import {PublicationList} from '../PublicationList'

export const PostList = ({posts}) => (
  <PublicationList publications={posts} Card={PostCard} />
)

PostList.propTypes = {
  posts: PropTypes.arrayOf(PostCard.propTypes.post).isRequired,
}
