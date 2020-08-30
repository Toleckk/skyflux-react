import React from 'react'
import {Route, Switch} from 'react-router-dom'
import {Common} from './pages'

export const SettingsRouter = () => (
  <Switch>
    <Route path="/settings" component={Common} />
  </Switch>
)
