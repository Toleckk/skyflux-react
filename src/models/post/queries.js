import deepmerge from 'deepmerge'
import {addNodeToConnection} from 'utils'
import {me} from 'models/user'
import {
  CREATE_POST,
  GET_FEED,
  GET_FOUND_POSTS,
  GET_POST_BY_ID,
  GET_POSTS_BY_NICKNAME,
  POST_CREATED,
} from './schemas'

export const getPostById = (_id, variables = {}) => ({
  query: GET_POST_BY_ID,
  variables: deepmerge({_id}, variables),
})

export const getPostsByNickname = (nickname, variables = {}) => ({
  query: GET_POSTS_BY_NICKNAME,
  variables: deepmerge({nickname}, variables),
})

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
