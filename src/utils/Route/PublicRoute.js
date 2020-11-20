import React from 'react'
import {Redirect, Route} from 'react-router'
import {useMe} from 'features/shared/hooks'

export const PublicRoute = props => {
  const {me} = useMe()

  if (me) return <Redirect to="/feed" />

  return <Route {...props} />
}
