import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {All, Posts, Users} from './pages'

export const SearchRouter = () => (
  <BrowserRouter basename="/search">
    <Switch>
      <Route exact path="/" component={All} />
      <Route exact path="/users" component={Users} />
      <Route exact path="/posts" component={Posts} />
    </Switch>
  </BrowserRouter>
)
