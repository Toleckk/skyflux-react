import {gql} from '@apollo/client'

const PostFragment = gql`
  fragment PostFragment on Post {
    _id
    text
    likesCount
    commentsCount
    createdAt
    hasMyLike
    user {
      nickname
      avatar
    }
  }
`

export const GET_POST_BY_ID = gql`
  query getPostById($id: ID!) {
    getPostById(id: $id) {
      ...PostFragment
    }
  }
  ${PostFragment}
`

export const GET_POSTS_BY_NICKNAME = gql`
  query getPostsByNickname($nickname: String!) {
    getPostsByNickname(nickname: $nickname) {
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
  query getFeed {
    getFeed {
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
  query getFoundPosts($text: String!) {
    getFoundPosts(text: $text) {
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
