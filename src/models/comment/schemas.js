import {gql} from '@apollo/client'

export const CommentFragment = gql`
  fragment CommentFragment on Comment {
    _id
    text
    createdAt
    user {
      nickname
      avatar
    }
  }
`

export const GET_COMMENTS_BY_POST_ID = gql`
  query getCommentsByPostId($_id: ID!, $first: Int, $after: ID) {
    getCommentsByPostId(post_id: $_id, first: $first, after: $after) {
      edges {
        cursor
        node {
          ...CommentFragment
        }
      }
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        startCursor
      }
    }
  }
  ${CommentFragment}
`

export const CREATE_COMMENT = gql`
  mutation createComment($postId: ID!, $text: String!) {
    createComment(text: $text, postId: $postId) {
      _id
    }
  }
`
