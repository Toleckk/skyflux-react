import {getUserByNickname} from 'models/user'
import {CREATE_SUBSCRIPTION, REMOVE_SUBSCRIPTION} from './schemas'

export const createSubscription = (variables = {}) => ({
  mutation: CREATE_SUBSCRIPTION,
  variables,
  refetchQueries: (_, variables) => [getUserByNickname(variables.nickname)],
})

export const removeSubscription = (variables = {}) => ({
  mutation: REMOVE_SUBSCRIPTION,
  variables,
  refetchQueries: (_, variables) => [getUserByNickname(variables.nickname)],
})
