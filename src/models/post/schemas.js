import {gql} from '@apollo/client'
import {CommentFragment} from '../comment'

export const PostFragment = gql`
  fragment PostFragment on Post {
    _id
    text
    likesCount
    commentsCount
    createdAt
    isLikedByMe
    user {
      _id
      nickname
      avatar
    }
  }
`

export const POST = gql`
  query post($_id: ID!, $afterComment: ID, $firstComments: Int!) {
    post(_id: $_id) {
      ...PostFragment
      comments(after: $afterComment, first: $firstComments) {
        edges {
          cursor
          node {
            ...CommentFragment
          }
        }
        pageInfo {
          endCursor
          hasNextPage
          startCursor
          hasPreviousPage
        }
      }
    }
  }
  ${PostFragment}
  ${CommentFragment}
`

export const FEED = gql`
  query feed($first: Int!, $after: ID) {
    feed(first: $first, after: $after) {
      edges {
        node {
          ...PostFragment
        }
        cursor
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }
  ${PostFragment}
`

export const POSTS = gql`
  query posts($query: String!, $first: Int!, $after: ID) {
    posts(query: $query, after: $after, first: $first) {
      edges {
        node {
          ...PostFragment
        }
        cursor
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }
  ${PostFragment}
`

export const CREATE_POST = gql`
  mutation createPost($text: String!) {
    createPost(post: {text: $text}) {
      ...PostFragment
    }
  }
  ${PostFragment}
`

export const DELETE_POST = gql`
  mutation deletePost($_id: ID!) {
    deletePost(_id: $_id) {
      _id
    }
  }
`

export const POST_CREATED = gql`
  subscription postCreated($nickname: String!) {
    postCreated(nickname: $nickname) {
      ...PostFragment
      user {
        _id
        avatar
        nickname
        postsCount
      }
    }
  }
  ${PostFragment}
`

export const POST_DELETED = gql`
  subscription postDeleted($nickname: String!) {
    postDeleted(nickname: $nickname) {
      _id
      user {
        _id
        postsCount
      }
    }
  }
`
