import React from 'react'
import {Route, Switch} from 'react-router-dom'
import {All, Posts, Users} from './pages'

export const SearchRouter = () => (
  <Switch>
    <Route exact path="/search" component={All} />
    <Route exact path="/search/users" component={Users} />
    <Route exact path="/search/posts" component={Posts} />
  </Switch>
)
