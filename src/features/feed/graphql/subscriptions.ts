import {gql} from '@apollo/client'
import {POST_FRAGMENT} from '@skyflux/react/features/shared/graphql'

export const FEED_UPDATED = gql`
  subscription FeedUpdated {
    feedUpdated {
      ...PostFragment
      ... on DeletedPost {
        _id
        deleted
      }
    }
  }
  ${POST_FRAGMENT}
`
