import * as React from 'react'

import { inject, observer } from 'mobx-react'

import AppContainer from './AppContainer'
import DevTools from 'mobx-react-devtools'
import Footer from '../components/Footer'
import Header from '../components/Header'
import PhotosContainer from './PhotosContainer'

class RootContainer extends React.Component {

  switchRoute = url => {
    switch (url) {
    case '/':
      return <AppContainer />
    case '/photos':
      return <PhotosContainer />
    default:
      return <AppContainer />
    }
  }

  render() {
    const { url } = this.props
    return (
      <>
        <Header />
        {this.switchRoute(url)}
        <Footer />
        <DevTools /> 
      </>
    )
  
  }
}

export default inject(stores => ({
  url: stores.rootStore.routerStore.url,
  changeUrl: stores.rootStore.routerStore.changeUrl,
}))(observer(RootContainer))