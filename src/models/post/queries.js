import deepmerge from 'deepmerge'
import {addNodeToConnection, deleteNodeFromConnection} from 'utils'
import {subAccepted} from 'models/sub'
import {likeCreated, likeDeleted} from 'models/like'
import {
  CREATE_POST,
  DELETE_POST,
  GET_FEED,
  GET_FOUND_POSTS,
  GET_POST_BY_ID,
  GET_POSTS_BY_NICKNAME,
  POST_CREATED,
  POST_DELETED,
} from './schemas'

export const getPostById = (_id, variables = {}) => {
  const {subscription: created, variables: createdVars} = likeCreated(_id)
  const {subscription: deleted, variables: deletedVars} = likeDeleted(_id)

  return {
    query: GET_POST_BY_ID,
    variables: deepmerge({_id}, variables),
    subscriptions: [
      {document: created, variables: createdVars},
      {document: deleted, variables: deletedVars},
    ],
  }
}

export const getPostsByNickname = (nickname, variables = {}) => {
  const {subscription: created, variables: createdVars} = postCreated(nickname)
  const {subscription: deleted, variables: deletedVars} = postDeleted(nickname)
  const {subscription: accepted, variables: acceptedVars} = subAccepted()

  return {
    query: GET_POSTS_BY_NICKNAME,
    variables: deepmerge({nickname}, variables),
    subscriptions: [
      {
        document: created,
        variables: createdVars,
        updateQuery: ({getPostsByNickname}, {subscriptionData: {data}}) => ({
          getPostsByNickname: addNodeToConnection(
            data.postCreated,
            getPostsByNickname,
          ),
        }),
      },
      {
        document: deleted,
        variables: deletedVars,
        updateQuery: ({getPostsByNickname}, {subscriptionData: {data}}) => ({
          getPostsByNickname: deleteNodeFromConnection(
            data.postDeleted,
            getPostsByNickname,
          ),
        }),
      },
      {
        document: accepted,
        variables: acceptedVars,
        updateQuery: (prev, {subscriptionData: {data}}) =>
          data.subAccepted.to.nickname === nickname
            ? Symbol.for('refetch')
            : prev,
      },
    ],
  }
}

export const getFeed = (variables = {}) => {
  const {subscription: accepted, variables: acceptedVars} = subAccepted()

  return {
    query: GET_FEED,
    variables,
    subscriptions: [
      {
        document: accepted,
        variables: acceptedVars,
        updateQuery: prev =>
          prev.getFeed.length ? prev : Symbol.for('refetch'),
      },
    ],
  }
}

export const getFoundPosts = (text, variables = {}) => ({
  query: GET_FOUND_POSTS,
  variables: deepmerge({text}, variables),
  skip: !text,
})

export const createPost = (variables = {}) => ({
  mutation: CREATE_POST,
  variables,
})

export const deletePost = (variables = {}) => ({
  mutation: DELETE_POST,
  variables,
})

export const postCreated = (nickname, variables = {}) => ({
  subscription: POST_CREATED,
  variables: deepmerge({nickname}, variables),
})

export const postDeleted = (nickname, variables = {}) => ({
  subscription: POST_DELETED,
  variables: deepmerge({nickname}, variables),
})
