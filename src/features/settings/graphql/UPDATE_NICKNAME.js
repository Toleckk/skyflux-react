import {gql} from '@apollo/client'

export const UPDATE_NICKNAME = gql`
  mutation UpdateNickname($nickname: String!) {
    updateNickname(user: {nickname: $nickname}) {
      _id
      nickname
    }
  }
`
