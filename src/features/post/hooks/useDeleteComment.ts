import {FC, useCallback} from 'react'
import {ApolloError, FetchResult, useMutation} from '@apollo/client'
import {
  AppliedConfirmDialogProps,
  useConfirmDialog,
} from 'features/shared/hooks'
import {DELETE_COMMENT, DeleteComment, DeleteCommentVariables} from '../graphql'

export type UseDeleteCommentResult = {
  deleteComment: (
    comment: DeleteCommentVariables,
  ) => Promise<FetchResult<DeleteComment>>
  ConfirmDeleteCommentModal: FC<AppliedConfirmDialogProps>
  loading: boolean
  data?: DeleteComment | null
  error?: ApolloError
}

export const useDeleteComment = (): UseDeleteCommentResult => {
  const [del, {data, error, loading}] = useMutation(DELETE_COMMENT)

  const deleteComment = useCallback(comment => del({variables: comment}), [del])

  const [deleteCommentWithConfirmation, Modal] = useConfirmDialog(deleteComment)

  return {
    deleteComment: deleteCommentWithConfirmation,
    ConfirmDeleteCommentModal: Modal,
    loading,
    data,
    error,
  }
}
