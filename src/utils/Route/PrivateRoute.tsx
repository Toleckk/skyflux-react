import React from 'react'
import {Redirect, Route, RouteProps} from 'react-router'
import {useMe} from 'features/shared/hooks'

export const PrivateRoute: React.FC<RouteProps> = props => {
  const {me} = useMe()

  if (!me) return <Redirect to="/id/auth" />

  return <Route {...props} />
}
