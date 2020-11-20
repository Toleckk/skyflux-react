import {gql} from '@apollo/client'
import {MaybeEventFragment} from './fragments'

export const EVENT_UPDATED = gql`
  subscription EventUpdated {
    eventUpdated {
      ...MaybeEventFragment
    }
  }
  ${MaybeEventFragment}
`
