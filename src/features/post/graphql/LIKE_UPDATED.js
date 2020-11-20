import {gql} from '@apollo/client'

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
