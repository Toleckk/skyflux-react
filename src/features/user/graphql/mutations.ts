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

export const DELETE_POST = gql`
  mutation DeletePost($_id: ID!) {
    deletePost(_id: $_id) {
      _id
    }
  }
`

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
