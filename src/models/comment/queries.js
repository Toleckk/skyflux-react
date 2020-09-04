import {GET_COMMENTS_BY_POST_ID} from './schemas'

export const getCommentsByPostId = _id => ({
  query: GET_COMMENTS_BY_POST_ID,
  variables: {_id},
})
