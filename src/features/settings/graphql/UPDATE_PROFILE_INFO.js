import {gql} from '@apollo/client'

export const UPDATE_PROFILE_INFO = gql`
  mutation UpdateProfileInfo($avatar: String, $description: DescrpitionInput!) {
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
