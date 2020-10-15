import {addNodeToConnection, deleteNodeFromConnection} from 'utils'
import {EVENT_ADDED, EVENT_DELETED, GET_EVENTS} from './schemas'

export const getEvents = (variables = {}) => {
  const {subscription: added, variables: addedVars} = eventAdded()
  const {subscription: deleted, variables: deletedVars} = eventDeleted()

  return {
    query: GET_EVENTS,
    variables,
    subscriptions: [
      {
        document: added,
        variables: addedVars,
        updateQuery: ({getEvents}, {subscriptionData: {data}}) => ({
          getEvents: addNodeToConnection(data.eventAdded, getEvents),
        }),
      },
      {
        document: deleted,
        variables: deletedVars,
        updateQuery: ({getEvents}, {subscriptionData: {data}}) => ({
          getEvents: deleteNodeFromConnection(data.eventDeleted, getEvents),
        }),
      },
    ],
  }
}

export const eventAdded = () => ({
  subscription: EVENT_ADDED,
})

export const eventDeleted = () => ({
  subscription: EVENT_DELETED,
})
