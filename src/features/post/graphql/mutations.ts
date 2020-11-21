import {gql} from '@apollo/client'

export const CREATE_COMMENT = gql`
  mutation CreateComment($postId: ID!, $text: String!) {
    createComment(comment: {text: $text, post_id: $postId}) {
      _id
    }
  }
`

export const DELETE_COMMENT = gql`
  mutation DeleteComment($_id: ID!) {
    deleteComment(_id: $_id) {
      _id
    }
  }
`
