import React from 'react'
import ReactDOM from 'react-dom'
import 'react-image-lightbox/style.css'
import 'react-toastify/dist/ReactToastify.min.css'
import 'normalize.css'
import 'focus-within-polyfill'
import './index.css'
import './configs'
import {App} from './App'
import {reportWebVitals} from './reportWebVitals'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
