import {useCallback} from 'react'
import {useMutation} from '@apollo/client'
import {CREATE_LIKE, DELETE_LIKE} from '../graphql'

export type UseToggleLikeResult = {
  toggle: () => void
  loading: boolean
}

export const useToggleLike = (post: {
  _id: string
  isLikedByMe: boolean
}): UseToggleLikeResult => {
  const variables = {postId: post._id}

  const [like, likeState] = useMutation(CREATE_LIKE, {variables})
  const [unlike, unlikeState] = useMutation(DELETE_LIKE, {variables})

  const {isLikedByMe} = post

  const toggle = useCallback(() => (isLikedByMe ? unlike() : like()), [
    isLikedByMe,
    like,
    unlike,
  ])

  return {toggle, loading: likeState.loading || unlikeState.loading}
}
