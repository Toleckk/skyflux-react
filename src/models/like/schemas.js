import {gql} from '@apollo/client'

export const CREATE_LIKE = gql`
  mutation createLike($postId: ID!) {
    createLike(postId: $postId) {
      _id
    }
  }
`

export const REMOVE_LIKE = gql`
  mutation removeLike($postId: ID!) {
    removeLike(postId: $postId)
  }
`
