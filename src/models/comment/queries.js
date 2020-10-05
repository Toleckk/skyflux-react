import deepmerge from 'deepmerge'
import {getPostById} from 'models/post'
import {CREATE_COMMENT, GET_COMMENTS_BY_POST_ID} from './schemas'

export const getCommentsByPostId = (postId, variables = {}) => ({
  query: GET_COMMENTS_BY_POST_ID,
  variables: deepmerge({postId}, variables),
})

export const createComment = variables => ({
  mutation: CREATE_COMMENT,
  variables,
  refetchQueries: (_, variables) => [getPostById(variables.postId)],
})
