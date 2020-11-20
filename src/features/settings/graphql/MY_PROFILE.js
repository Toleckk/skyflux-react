import {gql} from '@apollo/client'

export const MY_PROFILE = gql`
  query MyProfile {
    me {
      _id
      nickname
      avatar
      private
      description {
        about
        birthday
        from
      }
    }
  }
`
