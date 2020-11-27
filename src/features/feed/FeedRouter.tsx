import React, {memo} from 'react'
import {Switch} from 'react-router'
import {PrivateRoute} from '@skyflux/react/utils'
import {All} from './pages'

export const FeedRouter: React.FC = memo(() => {
  return (
    <Switch>
      <PrivateRoute exact path="/feed" component={All} />
    </Switch>
  )
})

FeedRouter.displayName = 'FeedRouter'
