import {CREATE_SESSION, DELETE_CURRENT_SESSION} from './schemas'

export const createSession = (variables = {}) => ({
  mutation: CREATE_SESSION,
  variables,
  onCompleted: ({createSession}, {client}) => {
    localStorage.setItem('token', createSession || null)
    client.resetConnection()
    client.cache.reset()
    client.resetPersist()
  },
})

export const deleteCurrentSession = () => ({
  mutation: DELETE_CURRENT_SESSION,
  onCompleted: (_, {client}) => {
    localStorage.setItem('token', null)
    client.resetConnection()
    client.cache.reset()
    client.resetPersist()
  },
})
