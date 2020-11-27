import {gql} from '@apollo/client'
import {MAYBE_EVENT_FRAGMENT, MAYBE_SUB_REQUEST_FRAGMENT} from './fragments'

export const EVENT_UPDATED = gql`
  subscription EventUpdated {
    eventUpdated {
      ...MaybeEventFragment
    }
  }
  ${MAYBE_EVENT_FRAGMENT}
`

export const SUBS_UPDATED = gql`
  subscription SubsUpdated($myId: ID!) {
    subsUpdated(to: $myId) {
      ...MaybeSubRequestFragment
    }
  }
  ${MAYBE_SUB_REQUEST_FRAGMENT}
`
