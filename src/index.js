import React from 'react'
import ReactDOM from 'react-dom'
import 'react-image-lightbox/style.css'
import 'react-toastify/dist/ReactToastify.min.css'
import 'normalize.css'
import 'focus-within-polyfill'
import './index.css'
import './configs'
import {App} from 'App'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
)

serviceWorker.register()
