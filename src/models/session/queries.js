import {CREATE_SESSION, REMOVE_CURRENT_SESSION} from './schemas'

export const createSession = (variables = {}) => ({
  mutation: CREATE_SESSION,
  variables,
})

export const removeCurrentSession = () => ({
  mutation: REMOVE_CURRENT_SESSION,
})
