import deepmerge from 'deepmerge'
import {addNodeToConnection} from 'utils'
import {getPostById} from 'models/post'
import {CREATE_COMMENT, GET_COMMENTS_BY_POST_ID} from './schemas'

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
        [`getCommentsByPostId({"first":25,"post_id":"${node.post._id}"})`]: addNodeToConnection(
          node,
        ),
      },
    })
  },
})
