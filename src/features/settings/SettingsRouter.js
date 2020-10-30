import React from 'react'
import {Switch} from 'react-router-dom'
import {PrivateRoute} from 'utils'
import {Common} from './pages'

export const SettingsRouter = () => (
  <Switch>
    <PrivateRoute exact path="/settings" component={Common} />
  </Switch>
)
