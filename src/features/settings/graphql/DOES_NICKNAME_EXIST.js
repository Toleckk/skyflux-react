import {gql} from '@apollo/client'

export const DOES_NICKNAME_EXIST = gql`
  query DoesNicknameExist($nickname: String!) {
    doesNicknameExist(nickname: $nickname)
  }
`
