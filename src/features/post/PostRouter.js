import React from 'react'
import {Route} from 'react-router'
import {useModal} from 'features/common/hooks'
import {Display} from './pages'

export const PostRouter = () => {
  const {isOpened} = useModal('post')

  return (
    <>
      <Route path="/post/:id" component={Display} />
      {isOpened && <Display />}
    </>
  )
}
