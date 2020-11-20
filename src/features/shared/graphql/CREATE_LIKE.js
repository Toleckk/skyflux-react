import {gql} from '@apollo/client'

export const CREATE_LIKE = gql`
  mutation CreateLike($postId: ID!) {
    createLike(post_id: $postId) {
      _id
      post {
        _id
        likesCount
        isLikedByMe
      }
    }
  }
`
