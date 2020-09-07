import deepmerge from 'deepmerge'
import {me} from 'models/user'
import {
  CREATE_POST,
  GET_FEED,
  GET_FOUND_POSTS,
  GET_POST_BY_ID,
  GET_POSTS_BY_NICKNAME,
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

export const createPost = () => ({
  mutation: CREATE_POST,
  refetchQueries: [me(), getFeed()],
})
