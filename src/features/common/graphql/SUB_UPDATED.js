import {gql} from '@apollo/client'
import {MaybeSubRequestFragment} from './fragments'

export const SUB_UPDATED = gql`
  subscription SubUpdated {
    subUpdated {
      ...MaybeSubRequestFragment
    }
  }
  ${MaybeSubRequestFragment}
`
