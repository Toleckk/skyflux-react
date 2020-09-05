import {CREATE_SUBSCRIPTION, REMOVE_SUBSCRIPTION} from './schemas'

export const createSubscription = (variables = {}) => ({
  mutation: CREATE_SUBSCRIPTION,
  variables,
})

export const removeSubscription = (variables = {}) => ({
  mutation: REMOVE_SUBSCRIPTION,
  variables,
})
