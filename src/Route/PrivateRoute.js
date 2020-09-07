import React from 'react'
import {Redirect, Route} from 'react-router'
import {useSuspendedQuery} from 'features/common/hooks'
import {me} from 'models/user'

export const PrivateRoute = props => {
  const {data} = useSuspendedQuery(me())

  if (!data.me) return <Redirect to="/id/auth" />

  return <Route {...props} />
}
