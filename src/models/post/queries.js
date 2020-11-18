import deepmerge from 'deepmerge'
import {subAccepted} from 'models/sub'
import {likeCreated, likeDeleted} from 'models/like'
import {
  CREATE_POST,
  DELETE_POST,
  FEED,
  POSTS,
  POST,
  POST_CREATED,
  POST_DELETED,
} from './schemas'

export const post = (_id, variables = {}) => {
  const {subscription: created, variables: createdVars} = likeCreated(_id)
  const {subscription: deleted, variables: deletedVars} = likeDeleted(_id)

  return {
    query: POST,
    variables: deepmerge({_id}, variables),
    subscriptions: [
      {document: created, variables: createdVars},
      {document: deleted, variables: deletedVars},
    ],
  }
}

export const feed = (variables = {}) => {
  const {subscription: accepted, variables: acceptedVars} = subAccepted()

  return {
    query: FEED,
    variables,
    subscriptions: [
      {
        document: accepted,
        variables: acceptedVars,
        updateQuery: prev => (prev.feed.length ? prev : Symbol.for('refetch')),
      },
    ],
  }
}

export const posts = (query, variables = {}) => ({
  query: POSTS,
  variables: deepmerge({query}, variables),
  skip: !query || !variables?.query,
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
