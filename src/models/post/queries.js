import deepmerge from 'deepmerge'
import {addNodeToConnection, deleteNodeFromConnection} from 'utils'
import {
  CREATE_POST,
  GET_FEED,
  GET_FOUND_POSTS,
  GET_POST_BY_ID,
  GET_POSTS_BY_NICKNAME,
  POST_CREATED,
  POST_DELETED,
} from './schemas'

export const getPostById = (_id, variables = {}) => ({
  query: GET_POST_BY_ID,
  variables: deepmerge({_id}, variables),
})

export const getPostsByNickname = (nickname, variables = {}) => {
  const {subscription: created, variables: createdVars} = postCreated(nickname)
  const {subscription: deleted, variables: deletedVars} = postDeleted(nickname)

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
    ],
  }
}

export const getFeed = (variables = {}) => ({
  query: GET_FEED,
  variables,
})

export const getFoundPosts = (text, variables = {}) => ({
  query: GET_FOUND_POSTS,
  variables: deepmerge({text}, variables),
  skip: !text,
})

export const createPost = (variables = {}) => ({
  mutation: CREATE_POST,
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
