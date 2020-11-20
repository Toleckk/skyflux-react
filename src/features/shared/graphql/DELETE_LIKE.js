import {gql} from '@apollo/client'

export const DELETE_LIKE = gql`
  mutation DeleteLike($postId: ID!) {
    deleteLike(post_id: $postId) {
      _id
      deleted
      post {
        _id
        likesCount
        isLikedByMe
      }
    }
  }
`
