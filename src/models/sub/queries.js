import {
  addNodeToConnection,
  deleteNodeFromConnection,
  refetchOnUpdate,
} from 'utils'
import {
  ACCEPT_SUB,
  CREATE_SUB,
  DELETE_SUB,
  GET_SUB_REQUESTS,
  GET_SUB_REQUESTS_COUNT,
  SUB_ACCEPTED,
  SUB_DELETED,
  SUB_REQUEST_CREATED,
} from './schemas'

export const createSub = (variables = {}) => ({
  mutation: CREATE_SUB,
  variables,
})

export const deleteSub = (variables = {}) => ({
  mutation: DELETE_SUB,
  variables,
})

export const getSubRequests = (variables = {}) => {
  const {subscription: created, variables: createdVars} = subRequestCreated()
  const {subscription: deleted, variables: deletedVars} = subDeleted()
  const {subscription: accepted, variables: acceptedVars} = subAccepted()

  return {
    query: GET_SUB_REQUESTS,
    variables,
    subscriptions: [
      {
        document: created,
        variables: createdVars,
        updateQuery: ({getSubRequests}, {subscriptionData: {data}}) => ({
          getSubRequests: addNodeToConnection(data.subCreated, getSubRequests),
        }),
      },
      {
        document: deleted,
        variables: deletedVars,
        updateQuery: ({getSubRequests}, {subscriptionData: {data}}) => ({
          getSubRequests: deleteNodeFromConnection(
            data.subDeleted,
            getSubRequests,
          ),
        }),
      },
      {
        document: accepted,
        variables: acceptedVars,
        updateQuery: ({getSubRequests}, {subscriptionData: {data}}) => ({
          getSubRequests: deleteNodeFromConnection(
            data.subAccepted,
            getSubRequests,
          ),
        }),
      },
    ],
  }
}

export const acceptSub = (variables = {}) => ({
  mutation: ACCEPT_SUB,
  variables,
})

export const getSubRequestsCount = () => {
  const {subscription: created, variables: createdVars} = subRequestCreated()
  const {subscription: deleted, variables: deletedVars} = subDeleted()
  const {subscription: accepted, variables: acceptedVars} = subAccepted()

  return {
    query: GET_SUB_REQUESTS_COUNT,
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
