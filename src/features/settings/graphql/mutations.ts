import {gql} from '@apollo/client'

export const MAKE_ACCOUNT_PRIVATE = gql`
  mutation MakeAccountPrivate {
    makeAccountPrivate {
      _id
      private
    }
  }
`

export const MAKE_ACCOUNT_PUBLIC = gql`
  mutation MakeAccountPublic {
    makeAccountPublic {
      _id
      private
    }
  }
`

export const UPDATE_NICKNAME = gql`
  mutation UpdateNickname($nickname: String!) {
    updateNickname(user: {nickname: $nickname}) {
      _id
      nickname
    }
  }
`

export const UPDATE_PASSWORD = gql`
  mutation UpdatePassword($oldPassword: String!, $newPassword: String!) {
    updatePassword(
      credentials: {oldPassword: $oldPassword, newPassword: $newPassword}
    )
  }
`

export const UPDATE_PROFILE_INFO = gql`
  mutation UpdateProfileInfo($avatar: String, $description: DescriptionInput!) {
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
