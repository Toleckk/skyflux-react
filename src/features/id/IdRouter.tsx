import React from 'react'
import {Switch} from 'react-router-dom'
import {PublicRoute} from '@skyflux/react/utils'
import {Auth, Message, Register, Reset, Restore} from './pages'
import {Landing} from './templates'

export const IdRouter: React.FC = () => (
  <Landing>
    <Switch>
      <PublicRoute exact path="/id/auth" component={Auth} />
      <PublicRoute exact path="/id/restore" component={Restore} />
      <PublicRoute exact path="/id/message" component={Message} />
      <PublicRoute exact path="/id/register" component={Register} />
      <PublicRoute exact path="/id/reset/:token" component={Reset} />
    </Switch>
  </Landing>
)
