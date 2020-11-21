import {gql} from '@apollo/client'

export const DOES_NICKNAME_EXIST = gql`
  query DoesNicknameExist($nickname: String!) {
    doesNicknameExist(nickname: $nickname)
  }
`

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
