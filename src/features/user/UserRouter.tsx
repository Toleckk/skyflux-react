import React from 'react'
import {Route, Switch} from 'react-router'
import {Wall} from './pages'

export const UserRouter: React.FC = () => (
  <Switch>
    <Route exact path="/@:nickname" component={Wall} />
  </Switch>
)
