import {CREATE_COMMENT, GET_COMMENTS_BY_POST_ID} from './schemas'

export const getCommentsByPostId = _id => ({
  query: GET_COMMENTS_BY_POST_ID,
  variables: {_id},
})

export const createComment = variables => ({
  mutation: CREATE_COMMENT,
  variables,
})
