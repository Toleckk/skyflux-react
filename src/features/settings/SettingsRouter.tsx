import React from 'react'
import {Switch} from 'react-router-dom'
import {PrivateRoute} from '@skyflux/react/utils'
import {Common} from './pages'

export const SettingsRouter: React.FC = () => (
  <Switch>
    <PrivateRoute exact path="/settings" component={Common} />
  </Switch>
)
