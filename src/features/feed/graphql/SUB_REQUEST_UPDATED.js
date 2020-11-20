import {gql} from '@apollo/client'

export const SUB_REQUEST_UPDATED = gql`
  subscription SubRequestUpdated {
    subUpdated {
      ... on Sub {
        accepted
        from {
          _id
          nickname
        }
      }
    }
  }
`
