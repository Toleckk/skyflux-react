import {gql} from '@apollo/client'

export const UserFragment = gql`
  fragment UserFragment on User {
    _id
    nickname
    avatar
    postsCount
    subscriptionsCount
    subscribersCount
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
          ...UserFragment
        }
        cursor
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }
  ${UserFragment}
`

export const GET_FOUND_USERS = gql`
  query getFoundUsers($text: String!) {
    getFoundUsers(text: $text) {
      edges {
        node {
          ...UserFragment
        }
        cursor
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }
  ${UserFragment}
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
