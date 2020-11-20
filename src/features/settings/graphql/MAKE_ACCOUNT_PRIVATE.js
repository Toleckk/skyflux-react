import {gql} from '@apollo/client'

export const MAKE_ACCOUNT_PRIVATE = gql`
  mutation MakeAccountPrivate {
    makeAccountPrivate {
      _id
      private
    }
  }
`
