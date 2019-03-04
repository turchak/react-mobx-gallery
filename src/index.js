import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'mobx-react'
import RootContainer from './containers/RootContainer'
import RootStore from './stores'
import './index.sass'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
  <Provider rootStore={new RootStore()}>
    <RootContainer />
  </Provider>, document.getElementById('root'))
serviceWorker.unregister()
