import React, {Suspense} from 'react'
import {BrowserRouter} from 'react-router-dom'
import {Redirect, Route, Switch} from 'react-router'
import {ApolloProvider} from '@apollo/client'
import {client} from 'configs'
import {PageLoader} from 'ui'
import {PrivateRoute, Theme} from 'utils'
import {IdRouter} from 'features/id'
import {UserRouter} from 'features/user'
import {FeedRouter} from 'features/feed'
import {PostRouter} from 'features/post'
import {SearchRouter} from 'features/search'
import {SettingsRouter} from 'features/settings'
import {Navigable} from 'features/common/templates'
import {ErrorBoundary, UserSuspense} from 'features/common/organisms'
import {LoadingIndicator} from 'features/common/molecules'

export const App: React.FC = () => (
  <Theme>
    <Suspense fallback={<PageLoader />}>
      <ApolloProvider client={client}>
        <ErrorBoundary>
          <UserSuspense>
            <LoadingIndicator />
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
          </UserSuspense>
        </ErrorBoundary>
      </ApolloProvider>
    </Suspense>
  </Theme>
)
