import {gql} from '@apollo/client'

export const SubRequestFragment = gql`
  fragment SubRequestFragment on Sub {
    _id
    accepted
    from {
      _id
      nickname
      avatar
    }
  }
`

export const CREATE_SUB = gql`
  mutation createSubscription($nickname: String!) {
    createSub(nickname: $nickname) {
      _id
    }
  }
`

export const DELETE_SUB = gql`
  mutation deleteSub($nickname: String!) {
    deleteSub(nickname: $nickname)
  }
`

export const GET_SUB_REQUESTS = gql`
  query getSubRequests($first: Int, $after: ID) {
    getSubRequests(first: $first, after: $after) {
      edges {
        cursor
        node {
          ...SubRequestFragment
        }
      }
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        startCursor
      }
    }
  }
  ${SubRequestFragment}
`

export const ACCEPT_SUB = gql`
  mutation acceptSub($_id: ID!) {
    acceptSub(sub_id: $_id) {
      _id
      accepted
    }
  }
`

export const GET_SUB_REQUESTS_COUNT = gql`
  query getSubRequestsCount {
    getSubRequestsCount
  }
`

export const SUB_REQUEST_CREATED = gql`
  subscription subRequestCreated {
    subRequestCreated {
      ...SubRequestFragment
    }
  }
  ${SubRequestFragment}
`

export const SUB_ACCEPTED = gql`
  subscription subAccepted {
    subAccepted {
      ...SubRequestFragment
    }
  }
  ${SubRequestFragment}
`

export const SUB_DELETED = gql`
  subscription subDeleted {
    subDeleted {
      _id
    }
  }
`
