import React from 'react'
import ReactDOM from 'react-dom'
import { Provider, propTypes } from 'mobx-react'
import RootContainer from './containers/RootContainer'
import appStore from './store'
import './index.sass'
import * as serviceWorker from './serviceWorker'

const stores = { appStore }

ReactDOM.render(
  <Provider { ...stores }>
    <RootContainer />
  </Provider>, document.getElementById('root'))
serviceWorker.unregister()
