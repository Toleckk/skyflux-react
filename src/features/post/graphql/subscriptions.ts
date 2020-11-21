import {gql} from '@apollo/client'
import {MAYBE_COMMENT_FRAGMENT} from './fragments'

export const COMMENT_UPDATED = gql`
  subscription CommentUpdated($postId: ID!) {
    commentUpdated(post_id: $postId) {
      ...MaybeCommentFragment
    }
  }
  ${MAYBE_COMMENT_FRAGMENT}
`

export const LIKE_UPDATED = gql`
  subscription LikeUpdated($postId: ID!) {
    likeUpdated(post_id: $postId) {
      ... on Like {
        _id
        post {
          likesCount
          isLikedByMe
        }
      }
      ... on DeletedLike {
        _id
        deleted
        post {
          likesCount
          isLikedByMe
        }
      }
    }
  }
`
