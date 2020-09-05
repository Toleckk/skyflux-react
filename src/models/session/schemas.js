import {gql} from '@apollo/client'

export const CREATE_SESSION = gql`
  mutation createSession($login: String!, $password: String!) {
    createSession(login: $login, password: $password)
  }
`

export const REMOVE_CURRENT_SESSION = gql`
  mutation removeCurrentSession {
    removeCurrentSession
  }
`
