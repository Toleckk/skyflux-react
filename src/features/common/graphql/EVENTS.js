import {gql} from '@apollo/client'
import {EventConnectionFragment} from './fragments'

export const EVENTS = gql`
  query Events($first: Int!, $after: ID) {
    events(first: $first, after: $after) {
      ...EventConnectionFragment
    }
  }
  ${EventConnectionFragment}
`
