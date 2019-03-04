import * as React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import App from './AppContainer'
// import emitter from '../services/EventEmitter'
import { observer, inject } from 'mobx-react'
import AlbumsContainer from './AlbumsContainer'
import PhotosContainer from './PhotosContainer'

class RootContainer extends React.Component {
  componentDidMount() {
    const { url, changeUrl } = this.props
    window.addEventListener( 'popstate', ev => {
      changeUrl(ev.state.url)
      console.log(ev.state)
    })
    const title = url
    const state = {
      name: title,
      url,
    }
    window.history.pushState(state, title, url)
  }

  switchRoute = url => {
    switch (url) {
    case '/':
      return <App />
    case '/albums':
      return <AlbumsContainer />
    case '/photos':
      return <PhotosContainer />
    default:
      return <App />
    }
  }

  render() {
    const { url } = this.props
    console.log(url);
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
  url: stores.rootStore.routerStore.url,
  changeUrl: stores.rootStore.routerStore.changeUrl,
}))(observer(RootContainer))