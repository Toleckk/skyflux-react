import React, {Suspense} from 'react'
import {BrowserRouter} from 'react-router-dom'
import {ThemeProvider} from 'styled-components'
import {Route, Switch} from 'react-router'
import {dark} from 'themes'
import {Navigable} from 'features/common/templates'
import {IdRouter} from 'features/id'
import {UserRouter} from 'features/user'
import {FeedRouter} from 'features/feed'
import {PostRouter} from 'features/post'
import {SearchRouter} from 'features/search'
import {SettingsRouter} from 'features/settings'
import {PageLoader} from 'ui'

export const App = () => (
  <ThemeProvider theme={dark}>
    <Suspense fallback={<PageLoader />}>
      <BrowserRouter>
        <Switch>
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
    </Suspense>
  </ThemeProvider>
)
