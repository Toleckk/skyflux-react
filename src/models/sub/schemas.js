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
  mutation createSub($nickname: String!) {
    createSub(nickname: $nickname) {
      _id
    }
  }
`

export const DELETE_SUB = gql`
  mutation deleteSub($nickname: String!) {
    deleteSub(nickname: $nickname) {
      _id
    }
  }
`

export const GET_SUB_REQUESTS = gql`
  query getSubRequests($first: Int!, $after: ID) {
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
    acceptSub(_id: $_id) {
      _id
      accepted
    }
  }
`

export const DECLINE_SUB = gql`
  mutation declineSub($_id: ID!) {
    declineSub(_id: $_id) {
      _id
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
      to {
        _id
        mySub {
          _id
          accepted
        }
      }
    }
  }
  ${SubRequestFragment}
`

export const SUB_ACCEPTED = gql`
  subscription subAccepted {
    subAccepted {
      ...SubRequestFragment
      from {
        _id
        nickname
        avatar
        subsCount
      }
      to {
        _id
        nickname
        subscribersCount
        mySub {
          _id
          accepted
        }
      }
    }
  }
  ${SubRequestFragment}
`

export const SUB_DELETED = gql`
  subscription subDeleted {
    subDeleted {
      _id
      from {
        _id
        nickname
        avatar
        subsCount
      }
      to {
        _id
        subscribersCount
        mySub {
          _id
          accepted
        }
      }
    }
  }
`
