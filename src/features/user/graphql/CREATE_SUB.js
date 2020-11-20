import {gql} from '@apollo/client'

export const CREATE_SUB = gql`
  mutation CreateSub($nickname: String!) {
    createSub(nickname: $nickname) {
      _id
      to {
        _id
        mySub {
          _id
          accepted
        }
      }
    }
  }
`
