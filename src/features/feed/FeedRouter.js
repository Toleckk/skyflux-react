import React from 'react'
import {Route, Switch} from 'react-router'
import {All} from './pages'

export const FeedRouter = () => (
  <Switch>
    <Route exact path="/feed" component={All} />
  </Switch>
)
