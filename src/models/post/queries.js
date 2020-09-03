import {
  GET_FEED,
  GET_FOUND_POSTS,
  GET_POST_BY_ID,
  GET_POSTS_BY_NICKNAME,
} from './schemas'

export const getPostById = id => ({
  query: GET_POST_BY_ID,
  variables: {id},
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
