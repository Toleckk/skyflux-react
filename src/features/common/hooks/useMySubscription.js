import {useSubscription} from '@apollo/client'

export const useMySubscription = ({subscription, ...rest}) =>
  useSubscription(subscription, rest)
