import React from 'react'
import {Redirect, Route} from 'react-router'
import {useQuery} from '@apollo/client'
import {ME} from 'models/user'

export const PublicRoute = props => {
  const {data} = useQuery(ME)

  if (data?.me) return <Redirect to="/feed" />

  return <Route {...props} />
}
