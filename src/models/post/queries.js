import {me} from 'models/user'
import {
  CREATE_POST,
  GET_FEED,
  GET_FOUND_POSTS,
  GET_POST_BY_ID,
  GET_POSTS_BY_NICKNAME,
} from './schemas'

export const getPostById = _id => ({
  query: GET_POST_BY_ID,
  variables: {_id},
})

export const getPostsByNickname = nickname => ({
  query: GET_POSTS_BY_NICKNAME,
  variables: {nickname},
})

export const getFeed = () => ({
  query: GET_FEED,
})

export const getFoundPosts = text => ({
  query: GET_FOUND_POSTS,
  variables: {text},
  skip: !text,
})

export const createPost = () => ({
  mutation: CREATE_POST,
  refetchQueries: [me(), getFeed()],
})
