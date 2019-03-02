import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'mobx-react'
import App from './components/App'
import CommonStore from './store'
import './index.sass'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
  <Provider store={ CommonStore }>
    <App />
  </Provider>, document.getElementById('root'))
serviceWorker.unregister()
