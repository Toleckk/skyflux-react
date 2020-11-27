import React, {Suspense} from 'react'
import {BrowserRouter} from 'react-router-dom'
import {Redirect, Route, Switch} from 'react-router'
import {ApolloProvider} from '@apollo/client'
import {client} from '@skyflux/react/configs'
import {PageLoader} from '@skyflux/react/ui'
import {PrivateRoute, Theme} from '@skyflux/react/utils'
import {IdRouter} from '@skyflux/react/features/id'
import {UserRouter} from '@skyflux/react/features/user'
import {FeedRouter} from '@skyflux/react/features/feed'
import {PostRouter} from '@skyflux/react/features/post'
import {SearchRouter} from '@skyflux/react/features/search'
import {SettingsRouter} from '@skyflux/react/features/settings'
import {Navigable} from '@skyflux/react/features/common/templates'
import {
  ErrorBoundary,
  LoadingIndicator,
  UserSuspense,
} from '@skyflux/react/features/common/components'

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
