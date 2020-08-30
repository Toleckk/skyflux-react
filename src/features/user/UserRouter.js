import React from 'react'
import {Route, Switch} from 'react-router'
import {Wall} from './pages'

export const UserRouter = () => (
  <Switch>
    <Route path="/user/@:nickname" component={Wall} />
  </Switch>
)
