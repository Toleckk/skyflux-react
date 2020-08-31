import React from 'react'
import ReactDOM from 'react-dom'
import 'normalize.css'
import 'focus-within-polyfill'
import './index.css'
import './i18n'
import {App} from './App'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
)

serviceWorker.register()
