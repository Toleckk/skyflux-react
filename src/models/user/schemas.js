import {gql} from '@apollo/client'

export const UserFragment = gql`
  fragment UserFragment on User {
    _id
    nickname
    avatar
    postsCount
    subscriptionsCount
    subscribersCount
    amISubscribed
    isPrivate
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
  query getByNickname($nickname: String!) {
    getUserByNickname(nickname: $nickname) {
      ...UserFragment
    }
  }
  ${UserFragment}
`

export const GET_SUGGESTIONS = gql`
  query getSuggestions {
    getSuggestions {
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
  query getFoundUsers($text: String!, $after: String, $first: Int) {
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

export const CREATE_USER = gql`
  mutation createUser($email: String!, $password: String!) {
    createUser(email: $email, password: $password) {
      _id
    }
  }
`

export const UPDATE_PROFILE_INFO = gql`
  mutation updateProfileInfo($avatar: String, $description: DescrpitionInput) {
    updateProfileInfo(
      profileInfo: {avatar: $avatar, description: $description}
    ) {
      _id
    }
  }
`

export const UPDATE_PASSWORD = gql`
  mutation updatePassword($oldPassword: String!, $newPassword: String!) {
    updatePassword(oldPassword: $oldPassword, newPassword: $newPassword)
  }
`

export const RESET_PASSWORD = gql`
  mutation resetPassword($token: String!, $password: String!) {
    resetPassword(token: $token, password: $password)
  }
`

export const MAKE_ACCOUNT_PRIVATE = gql`
  mutation makeAccountPrivate {
    makeAccountPrivate
  }
`

export const MAKE_ACCOUNT_PUBLIC = gql`
  mutation makeAccountPublic {
    makeAccountPublic
  }
`
