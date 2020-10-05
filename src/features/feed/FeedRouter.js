import React from 'react'
import {Switch} from 'react-router'
import {PrivateRoute} from 'utils'
import {All} from './pages'

export const FeedRouter = () => (
  <Switch>
    <PrivateRoute exact path="/feed" component={All} />
  </Switch>
)
