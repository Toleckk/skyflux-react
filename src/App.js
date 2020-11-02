import React, {Suspense} from 'react'
import {BrowserRouter} from 'react-router-dom'
import {Redirect, Route, Switch} from 'react-router'
import {ApolloProvider} from '@apollo/client'
import {client} from 'configs'
import {Navigable} from 'features/common/templates'
import {IdRouter} from 'features/id'
import {UserRouter} from 'features/user'
import {FeedRouter} from 'features/feed'
import {PostRouter} from 'features/post'
import {SearchRouter} from 'features/search'
import {SettingsRouter} from 'features/settings'
import {ErrorBoundary} from 'features/common/organisms'
import {PageLoader} from 'ui'
import {PrivateRoute, Theme} from 'utils'

export const App = () => (
  <Theme>
    <Suspense fallback={<PageLoader />}>
      <ApolloProvider client={client}>
        <ErrorBoundary>
          <BrowserRouter>
            <Switch>
              <PrivateRoute path="/" exact>
                <Redirect to="/feed" />
              </PrivateRoute>
              <Route path="/id">
                <IdRouter />
              </Route>
              <Navigable>
                <FeedRouter />
                <PostRouter />
                <SearchRouter />
                <SettingsRouter />
                <UserRouter />
              </Navigable>
            </Switch>
          </BrowserRouter>
        </ErrorBoundary>
      </ApolloProvider>
    </Suspense>
  </Theme>
)
