import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'mobx-react'
import RootContainer from './containers/RootContainer'
import Store from './store'
import './index.sass'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
  <Provider store={ new Store() }>
    <RootContainer />
  </Provider>, document.getElementById('root'))
serviceWorker.unregister()
