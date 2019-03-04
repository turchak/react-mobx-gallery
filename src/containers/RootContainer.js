import * as React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import App from './AppContainer'
import { observer, inject } from 'mobx-react'
import AlbumsContainer from './AlbumsContainer'
import PhotosContainer from './PhotosContainer'

class RootContainer extends React.Component {
  componentDidMount() {
    const { url, changeUrl } = this.props
    changeUrl(window.location.pathname)
    window.addEventListener( 'popstate', ev => {
      if (ev.state) {
        return changeUrl(ev.state.url)
      }
      changeUrl('/')
    })
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
    console.log(this.props)
    console.log(window.location)
    const { url } = this.props
    if (url) {
      return (
        <>
          <Header />
          {this.switchRoute(url)}
          <Footer />
        </>
      )
    }
    return null
  }
}

export default inject(stores => ({
  url: stores.rootStore.routerStore.url,
  changeUrl: stores.rootStore.routerStore.changeUrl,
}))(observer(RootContainer))