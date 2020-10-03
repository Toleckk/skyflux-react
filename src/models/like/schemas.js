import {gql} from '@apollo/client'

export const CREATE_LIKE = gql`
  mutation createLike($postId: ID!) {
    createLike(post_id: $postId) {
      _id
    }
  }
`

export const DELETE_LIKE = gql`
  mutation deleteLike($postId: ID!) {
    deleteLike(post_id: $postId)
  }
`
