import React from 'react'
import {Route} from 'react-router'
import {useModal} from '@skyflux/react/features/shared/hooks'
import {Display, PostModal} from './pages'

export const PostRouter: React.FC = () => {
  const {isOpened, payload, close} = useModal('post')

  return (
    <>
      <Route exact path="/post/:id" component={Display} />
      <PostModal
        _id={payload as string | null}
        visible={isOpened}
        onClose={close}
      />
    </>
  )
}
