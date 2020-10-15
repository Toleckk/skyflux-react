import deepmerge from 'deepmerge'
import {addNodeToConnection, refetchOnUpdate} from 'utils'
import {commentCreated} from 'models/comment'
import {me} from 'models/user'
import {
  CREATE_POST,
  GET_FEED,
  GET_FOUND_POSTS,
  GET_POST_BY_ID,
  GET_POSTS_BY_NICKNAME,
  POST_CREATED,
} from './schemas'

export const getPostById = (_id, variables = {}) => {
  const {
    subscription: commentAdded,
    variables: commentAddedVars,
  } = commentCreated(_id)

  return {
    query: GET_POST_BY_ID,
    variables: deepmerge({_id}, variables),
    subscriptions: [
      {
        document: commentAdded,
        variables: commentAddedVars,
        updateQuery: refetchOnUpdate,
      },
    ],
  }
}

export const getPostsByNickname = (nickname, variables = {}) => {
  const {subscription, variables: subVariables} = postCreated(nickname)

  return {
    query: GET_POSTS_BY_NICKNAME,
    variables: deepmerge({nickname}, variables),
    subscriptions: [
      {
        document: subscription,
        variables: subVariables,
        updateQuery: ({getPostsByNickname}, {subscriptionData: {data}}) => ({
          getPostsByNickname: addNodeToConnection(
            data.postCreated,
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
  refetchQueries: [me()],
  onCompleted: ({createPost: node}, {client: {cache}}) => {
    const {me: user} = cache.readQuery(me())

    const updateConnection = connection => addNodeToConnection(node, connection)

    cache.modify({
      fields: {
        [`getPostsByNickname({"first":25,"nickname":"${user.nickname}"})`]: updateConnection,
        'getFeed({"first":25})': updateConnection,
      },
    })
  },
})

export const postCreated = (nickname, variables = {}) => ({
  subscription: POST_CREATED,
  variables: deepmerge({nickname}, variables),
})
