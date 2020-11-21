import {gql} from '@apollo/client'
import {USER_BADGE_FRAGMENT} from './fragments'

export const ME = gql`
  query Me {
    me {
      ...UserBadgeFragment
      private
    }
  }
  ${USER_BADGE_FRAGMENT}
`
