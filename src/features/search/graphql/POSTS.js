import {gql} from '@apollo/client'
import {PostConnectionFragment} from 'features/shared/graphql'

export const POSTS = gql`
  query Posts($query: String!, $first: Int!, $after: ID) {
    posts(query: $query, after: $after, first: $first) {
      ...PostConnectionFragment
    }
  }
  ${PostConnectionFragment}
`
