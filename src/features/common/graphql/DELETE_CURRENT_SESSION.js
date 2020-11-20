import {gql} from '@apollo/client'

export const DELETE_CURRENT_SESSION = gql`
  mutation DeleteCurrentSession {
    deleteCurrentSession
  }
`
