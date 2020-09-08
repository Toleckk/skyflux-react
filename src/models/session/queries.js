import {me} from 'models/user'
import {CREATE_SESSION, REMOVE_CURRENT_SESSION} from './schemas'

export const createSession = (variables = {}) => ({
  mutation: CREATE_SESSION,
  refetchQueries: [me()],
  variables,
  onCompleted: ({createSession}) =>
    localStorage.setItem('token', createSession || null),
})

export const removeCurrentSession = () => ({
  mutation: REMOVE_CURRENT_SESSION,
  refetchQueries: [me()],
})
