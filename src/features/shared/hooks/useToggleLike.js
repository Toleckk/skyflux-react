import {useCallback} from 'react'
import {useMutation} from '@apollo/client'
import {CREATE_LIKE, DELETE_LIKE} from 'models/like'

export const useToggleLike = post => {
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
