import * as React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { observer, inject } from 'mobx-react'
import PhotosContainer from './PhotosContainer'
import AppContainer from './AppContainer'
import DevTools from 'mobx-react-devtools'

class RootContainer extends React.Component {
  componentDidMount() {
    console.log(window.location.hash)
    const { changeUrl } = this.props
    window.addEventListener( 'hashchange', ev => {
      const { hash } = ev.target.location
      console.log(hash)
      // if (ev.state) {
      //   return changeUrl(ev.state.url)
      // }
      changeUrl(`${hash}`)
    })
    changeUrl(`${window.location.hash}`)
  }

  switchRoute = url => {
    console.log(url)
    switch (url) {
    case '':
      return <AppContainer />
    case '/photos':
      return <PhotosContainer />
    default:
      return <AppContainer />
    }
  }

  render() {
    const { url } = this.props
    if (url) {
      return (
        <>
          <Header />
          {this.switchRoute(url)}
          <Footer />
          <DevTools /> 
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