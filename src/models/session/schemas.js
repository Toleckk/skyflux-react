import {gql} from '@apollo/client'

export const CREATE_SESSION = gql`
  mutation createSession($login: String!, $password: String!) {
    createSession(credentials: {login: $login, password: $password})
  }
`

export const DELETE_CURRENT_SESSION = gql`
  mutation deleteCurrentSession {
    deleteCurrentSession
  }
`
