import {addNodeToConnection, deleteNodeFromConnection} from 'utils'
import {EVENT_ADDED, EVENT_DELETED, EVENTS} from './schemas'

export const events = (variables = {}) => {
  const {subscription: added, variables: addedVars} = eventAdded()
  const {subscription: deleted, variables: deletedVars} = eventDeleted()

  return {
    query: EVENTS,
    variables,
    subscriptions: [
      {
        document: added,
        variables: addedVars,
        updateQuery: ({events}, {subscriptionData: {data}}) => ({
          getEvents: addNodeToConnection(data.eventAdded, events),
        }),
      },
      {
        document: deleted,
        variables: deletedVars,
        updateQuery: ({events}, {subscriptionData: {data}}) => ({
          events: deleteNodeFromConnection(data.eventDeleted, events),
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
