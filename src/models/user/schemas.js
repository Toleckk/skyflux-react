import {gql} from '@apollo/client'
import {PostFragment} from 'models/post'

export const UserFragment = gql`
  fragment UserFragment on User {
    _id
    nickname
    avatar
    postsCount
    subsCount
    subscribersCount
    private
    mySub {
      _id
      accepted
    }
    description {
      about
      birthday
      from
    }
  }
`

export const ME = gql`
  query me {
    me {
      ...UserFragment
    }
  }
  ${UserFragment}
`

export const GET_USER_BY_NICKNAME = gql`
  query getByNickname($nickname: String!, $firstPosts: Int!, $afterPost: ID) {
    getUserByNickname(nickname: $nickname) {
      ...UserFragment
      posts(first: $firstPosts, after: $afterPost) {
        edges {
          cursor
          node {
            ...PostFragment
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
  }
  ${UserFragment}
  ${PostFragment}
`

export const GET_SUGGESTIONS = gql`
  query getSuggestions {
    getSuggestions(first: 4) {
      edges {
        node {
          _id
          nickname
          avatar
        }
        cursor
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }
`

export const GET_FOUND_USERS = gql`
  query getFoundUsers($text: String!, $after: ID, $first: Int!) {
    getFoundUsers(text: $text, after: $after, first: $first) {
      edges {
        node {
          _id
          nickname
          avatar
        }
        cursor
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }
`

export const DOES_NICKNAME_EXIST = gql`
  query doesNicknameExist($nickname: String!) {
    doesNicknameExist(nickname: $nickname)
  }
`

export const CREATE_USER = gql`
  mutation createUser($email: String!, $password: String!) {
    createUser(user: {email: $email, password: $password}) {
      _id
    }
  }
`

export const UPDATE_PROFILE_INFO = gql`
  mutation updateProfileInfo($avatar: String, $description: DescrpitionInput!) {
    updateProfileInfo(user: {avatar: $avatar, description: $description}) {
      _id
      avatar
      description {
        about
        birthday
        from
      }
    }
  }
`

export const UPDATE_NICKNAME = gql`
  mutation updateNickname($nickname: String!) {
    updateNickname(user: {nickname: $nickname}) {
      _id
      nickname
    }
  }
`

export const UPDATE_PASSWORD = gql`
  mutation updatePassword($oldPassword: String!, $newPassword: String!) {
    updatePassword(
      credentials: {oldPassword: $oldPassword, newPassword: $newPassword}
    )
  }
`

export const RESET_PASSWORD = gql`
  mutation resetPassword($token: String!, $password: String!) {
    resetPassword(credentials: {token: $token, password: $password})
  }
`

export const MAKE_ACCOUNT_PRIVATE = gql`
  mutation makeAccountPrivate {
    makeAccountPrivate {
      _id
      private
    }
  }
`

export const MAKE_ACCOUNT_PUBLIC = gql`
  mutation makeAccountPublic {
    makeAccountPublic {
      _id
      private
    }
  }
`
