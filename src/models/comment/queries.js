import deepmerge from 'deepmerge'
import {addNodeToConnection} from 'utils'
import {getPostById} from 'models/post'
import {
  COMMENT_CREATED,
  CREATE_COMMENT,
  GET_COMMENTS_BY_POST_ID,
} from './schemas'

export const getCommentsByPostId = (postId, variables = {}) => {
  const {subscription, variables: subVariables} = commentCreated(postId)

  return {
    query: GET_COMMENTS_BY_POST_ID,
    variables: deepmerge({postId}, variables),
    subscriptions: [
      {
        document: subscription,
        variables: subVariables,
        updateQuery: ({getCommentsByPostId}, {subscriptionData: {data}}) => ({
          getCommentsByPostId: addNodeToConnection(
            data.commentCreated,
            getCommentsByPostId,
          ),
        }),
      },
    ],
  }
}

export const createComment = (variables = {}) => ({
  mutation: CREATE_COMMENT,
  variables,
  refetchQueries: (_, {postId}) => [getPostById(postId)],
})

export const commentCreated = (postId, variables = {}) => ({
  subscription: COMMENT_CREATED,
  variables: deepmerge({postId}, variables),
})
