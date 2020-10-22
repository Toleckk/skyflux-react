import {me} from 'models/user'
import {CREATE_SESSION, DELETE_CURRENT_SESSION} from './schemas'

export const createSession = (variables = {}) => ({
  mutation: CREATE_SESSION,
  variables,
  onCompleted: ({createSession}, {client}) => {
    localStorage.setItem('token', createSession || null)
    client.query({...me(), fetchPolicy: 'network-only'})
  },
})

export const deleteCurrentSession = () => ({
  mutation: DELETE_CURRENT_SESSION,
  onCompleted: (_, {client}) => client.cache.reset(),
})
