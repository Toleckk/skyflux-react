import React, {memo} from 'react'
import {PrivateRoute} from 'utils'
import {Switch} from 'react-router'
import {All} from './pages'

export const FeedRouter: React.FC = memo(() => {
  return (
    <Switch>
      <PrivateRoute exact path="/feed" component={All} />
    </Switch>
  )
})

FeedRouter.displayName = 'FeedRouter'
