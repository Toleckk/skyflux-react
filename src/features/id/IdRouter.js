import React from 'react'
import {Route, Switch} from 'react-router-dom'
import {Auth, Message, Register, Reset, Restore} from './pages'
import {Landing} from './templates'

export const IdRouter = () => (
  <Landing>
    <Switch>
      <Route exact path="/id/auth" component={Auth} />
      <Route exact path="/id/restore" component={Restore} />
      <Route exact path="/id/message" component={Message} />
      <Route exact path="/id/register" component={Register} />
      <Route exact path="/id/reset/:token" component={Reset} />
    </Switch>
  </Landing>
)
