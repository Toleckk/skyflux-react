import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {Auth, Message, Register, Reset, Restore} from './pages'
import {Landing} from './templates/Landing'

export const IdRouter = () => (
  <BrowserRouter basename="/id">
    <Landing>
      <Switch>
        <Route exact path="/auth" component={Auth} />
        <Route exact path="/restore" component={Restore} />
        <Route exact path="/message" component={Message} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/reset/:token" component={Reset} />
      </Switch>
    </Landing>
  </BrowserRouter>
)
