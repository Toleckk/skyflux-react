import {gql} from '@apollo/client'

export const MAKE_ACCOUNT_PUBLIC = gql`
  mutation MakeAccountPublic {
    makeAccountPublic {
      _id
      private
    }
  }
`
