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
    to {
      _id
      subscribersCount
      mySub {
        _id
        accepted
      }
    }
  }
`

export const DeletedSubFragment = gql`
  fragment DeletedSubFragment on DeletedSub {
    _id
    deleted
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

export const SUB_REQUESTS = gql`
  query subRequests($first: Int!, $after: ID) {
    subRequests(first: $first, after: $after) {
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

export const SUB_REQUESTS_COUNT = gql`
  query subRequestsCount {
    subRequestsCount
  }
`

export const SUB_UPDATED = gql`
  subscription subUpdated {
    subUpdated {
      ...SubRequestFragment
      ...DeletedSubFragment
    }
  }
  ${SubRequestFragment}
  ${DeletedSubFragment}
`
