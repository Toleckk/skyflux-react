import React from 'react'
import {Route} from 'react-router'
import {useModal} from 'features/shared/hooks'
import {Display, PostModal} from './pages'

export const PostRouter = () => {
  const {isOpened, payload, close} = useModal('post')

  return (
    <>
      <Route exact path="/post/:id" component={Display} />
      <PostModal _id={payload} visible={isOpened} onClose={close} />
    </>
  )
}
