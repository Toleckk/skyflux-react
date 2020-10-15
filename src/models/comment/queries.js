import deepmerge from 'deepmerge'
import {addNodeToConnection} from 'utils'
import {getPostById} from 'models/post'
import {
  COMMENT_CREATED,
  CREATE_COMMENT,
  GET_COMMENTS_BY_POST_ID,
} from './schemas'

export const getCommentsByPostId = (postId, variables = {}) => ({
  query: GET_COMMENTS_BY_POST_ID,
  variables: deepmerge({postId}, variables),
})

export const createComment = (variables = {}) => ({
  mutation: CREATE_COMMENT,
  variables,
  refetchQueries: (_, {postId}) => [getPostById(postId)],
  onCompleted: ({createComment: node}, {client: {cache}}) => {
    cache.modify({
      fields: {
        [`getCommentsByPostId({"first":25,"post_id":"${node.post._id}"})`]: connection =>
          addNodeToConnection(node, connection),
      },
    })
  },
})

export const commentCreated = (postId, variables = {}) => ({
  subscription: COMMENT_CREATED,
  variables: deepmerge({postId}, variables),
})
