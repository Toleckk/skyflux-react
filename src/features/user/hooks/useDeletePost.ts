import {FC, useCallback} from 'react'
import {ApolloError, FetchResult, useMutation} from '@apollo/client'
import {
  AppliedConfirmDialogProps,
  useConfirmDialog,
} from 'features/shared/hooks'
import {DELETE_POST, DeletePost, DeletePostVariables} from '../graphql'

export type UseDeletePostResult = {
  deletePost: (post: DeletePostVariables) => Promise<FetchResult<DeletePost>>
  ConfirmDeletePostModal: FC<AppliedConfirmDialogProps>
  deleting: boolean
  data?: DeletePost | null
  error?: ApolloError
}

export const useDeletePost = (): UseDeletePostResult => {
  const [del, {loading, error, data}] = useMutation(DELETE_POST)

  const deletePost = useCallback(post => del({variables: post}), [del])

  const [deleteWithConfirmation, Modal] = useConfirmDialog(deletePost)

  return {
    deletePost: deleteWithConfirmation,
    ConfirmDeletePostModal: Modal,
    deleting: loading,
    error,
    data,
  }
}
