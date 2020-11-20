import {gql} from '@apollo/client'

export const SUB_REQUESTS_COUNT = gql`
  query SubRequestsCount {
    subRequestsCount
  }
`
