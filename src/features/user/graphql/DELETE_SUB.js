import {gql} from '@apollo/client'

export const DELETE_SUB = gql`
  mutation DeleteSub($nickname: String!) {
    deleteSub(nickname: $nickname) {
      _id
      to {
        _id
        mySub {
          _id
        }
      }
    }
  }
`
