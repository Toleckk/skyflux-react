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

export const SUB_UPDATED = gql`
  subscription SubUpdated {
    subUpdated {
      ...MaybeSubRequestFragment
    }
  }
  ${MAYBE_SUB_REQUEST_FRAGMENT}
`
