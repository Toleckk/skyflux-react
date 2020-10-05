import {gql} from '@apollo/client'

const PostFragment = gql`
  fragment PostFragment on Post {
    _id
    text
    likesCount
    commentsCount
    createdAt
    isLikedByMe
    user {
      nickname
      avatar
    }
  }
`

export const GET_POST_BY_ID = gql`
  query getPostById($_id: ID!) {
    getPostById(_id: $_id) {
      ...PostFragment
    }
  }
  ${PostFragment}
`

export const GET_POSTS_BY_NICKNAME = gql`
  query getPostsByNickname($nickname: String!, $first: Int, $after: ID) {
    getPostsByNickname(nickname: $nickname, after: $after, first: $first) {
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

export const GET_FEED = gql`
  query getFeed($first: Int, $after: ID) {
    getFeed(first: $first, after: $after) {
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

export const GET_FOUND_POSTS = gql`
  query getFoundPosts($text: String!, $first: Int, $after: ID) {
    getFoundPosts(text: $text, after: $after, first: $first) {
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
    createPost(text: $text) {
      ...PostFragment
    }
  }
  ${PostFragment}
`
