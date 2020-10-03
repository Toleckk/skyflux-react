import {me} from 'models/user'
import {CREATE_SESSION, DELETE_CURRENT_SESSION} from './schemas'

export const createSession = (variables = {}) => ({
  mutation: CREATE_SESSION,
  refetchQueries: [me()],
  variables,
  onCompleted: ({createSession}) =>
    localStorage.setItem('token', createSession || null),
})

export const deleteCurrentSession = () => ({
  mutation: DELETE_CURRENT_SESSION,
  onCompleted: (_, {client}) => client.resetStore(),
})
