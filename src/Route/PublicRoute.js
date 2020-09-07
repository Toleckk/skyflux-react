import React from 'react'
import {Redirect, Route} from 'react-router'
import {useSuspendedQuery} from 'features/common/hooks'
import {me} from 'models/user'

export const PublicRoute = props => {
  const {data} = useSuspendedQuery(me())

  if (data.me?._id) return <Redirect to="/feed" />

  return <Route {...props} />
}
