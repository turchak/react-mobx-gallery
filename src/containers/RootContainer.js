import * as React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import App from './AppContainer'
// import emitter from '../services/EventEmitter'
import { observer, inject } from 'mobx-react'

class RootContainer extends React.Component {

  switchRoute = url => {
    switch (url) {
    case '/':
      return <App />
    case '/albums':
      return <div>Albums</div>
    default:
      return <div>Default</div>
    }
  }

  render() {
    const { url } = this.props
    return (
      <>
        <Header />
        {this.switchRoute(url)}
        <Footer />
      </>
    )
  }
}

export default inject(stores => ({
  url: stores.rootStore.routerStore.url
}))(observer(RootContainer))