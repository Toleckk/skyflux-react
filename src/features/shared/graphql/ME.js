import {gql} from '@apollo/client'
import {UserBadgeFragment} from './fragments'

export const ME = gql`
  query Me {
    me {
      ...UserBadgeFragment
      private
    }
  }
  ${UserBadgeFragment}
`
