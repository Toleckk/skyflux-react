import React from 'react'
import {Switch} from 'react-router-dom'
import {PrivateRoute} from 'Route'
import {Common} from './pages'

export const SettingsRouter = () => (
  <Switch>
    <PrivateRoute path="/settings" component={Common} />
  </Switch>
)
