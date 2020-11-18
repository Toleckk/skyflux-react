import {
  addNodeToConnection,
  deleteNodeFromConnection,
  refetchOnUpdate,
} from 'utils'
import {
  ACCEPT_SUB,
  CREATE_SUB,
  DECLINE_SUB,
  DELETE_SUB,
  SUB_ACCEPTED,
  SUB_DELETED,
  SUB_REQUEST_CREATED,
  SUB_REQUESTS,
  SUB_REQUESTS_COUNT,
} from './schemas'

export const createSub = (variables = {}) => ({
  mutation: CREATE_SUB,
  variables,
})

export const deleteSub = (variables = {}) => ({
  mutation: DELETE_SUB,
  variables,
})

export const subRequests = (variables = {}) => {
  const {subscription: created, variables: createdVars} = subRequestCreated()
  const {subscription: deleted, variables: deletedVars} = subDeleted()
  const {subscription: accepted, variables: acceptedVars} = subAccepted()

  return {
    query: SUB_REQUESTS,
    variables,
    subscriptions: [
      {
        document: created,
        variables: createdVars,
        updateQuery: ({subRequests}, {subscriptionData: {data}}) => ({
          subRequests: addNodeToConnection(data.subRequestCreated, subRequests),
        }),
      },
      {
        document: deleted,
        variables: deletedVars,
        updateQuery: ({subRequests}, {subscriptionData: {data}}) => ({
          subRequests: deleteNodeFromConnection(data.subDeleted, subRequests),
        }),
      },
      {
        document: accepted,
        variables: acceptedVars,
        updateQuery: ({subRequests}, {subscriptionData: {data}}) => ({
          subRequests: deleteNodeFromConnection(data.subAccepted, subRequests),
        }),
      },
    ],
  }
}

export const acceptSub = (variables = {}) => ({
  mutation: ACCEPT_SUB,
  variables,
})

export const declineSub = (variables = {}) => ({
  mutation: DECLINE_SUB,
  variables,
})

export const subRequestsCount = () => {
  const {subscription: created, variables: createdVars} = subRequestCreated()
  const {subscription: deleted, variables: deletedVars} = subDeleted()
  const {subscription: accepted, variables: acceptedVars} = subAccepted()

  return {
    query: SUB_REQUESTS_COUNT,
    subscriptions: [
      {document: created, variables: createdVars, updateQuery: refetchOnUpdate},
      {document: deleted, variables: deletedVars, updateQuery: refetchOnUpdate},
      {
        document: accepted,
        variables: acceptedVars,
        updateQuery: refetchOnUpdate,
      },
    ],
  }
}

export const subRequestCreated = () => ({
  subscription: SUB_REQUEST_CREATED,
})

export const subAccepted = () => ({
  subscription: SUB_ACCEPTED,
})

export const subDeleted = () => ({
  subscription: SUB_DELETED,
})
